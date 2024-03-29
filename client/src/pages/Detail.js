import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import etsy from "../assets/etsy.png";
import spinner from "../assets/spinner.gif";
import { ADD_FAVORITE } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [fav] = useMutation(ADD_FAVORITE);
  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  const addToFavorites = async () => {
    console.log("adding this product id to favorites", currentProduct._id);
    const { data } = await fav({
      variables: {
        product: currentProduct._id,
      },
    });
    if (data) {
      setSaved(true);
    }
    console.log(data);
  };

  return (
    <>
      {currentProduct && cart ? (
        <div id="product-detail" className="container card my-1">
          <Link to="/"> ← Back to Products</Link>

          <h2 id="prod-name">{currentProduct.name}</h2>

          <p>
            <img src={etsy} alt="Etsy" /> {currentProduct.description}
          </p>

          {/* <Link to={currentProduct.website}>Visit Here!</Link>  */}

          <p>
            <strong>Price:</strong>${currentProduct.price} <br />
            <button className="btn btn-info" onClick={addToCart}>
              Add to Cart
            </button>
            <button
              className="btn btn-danger"
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
            <button
              className="btn btn-info"
              disabled={saved}
              onClick={addToFavorites}
            >
              Add to favorites
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
