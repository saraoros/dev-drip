import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { ADD_FAVORITE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  const [fav] = useMutation(ADD_FAVORITE);
  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  const addToFavorites = async () => {
    const response = await fav({
      variables: {
        product: _id,
      },
    });
    console.log(response);
  };

  return (
    <div id="prod-img" className="card px-1 py-1 m-2">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <span>
          <strong>${price} </strong>
        </span>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
      </div>
      <button
        type="button"
        className="btn 
         btn-info m-1"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;
