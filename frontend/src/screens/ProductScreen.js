import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from "../actions/productactions";



const ProductScreen = ({ match }) => {
  const dispatch = useDispatch ()

  const productDetails = useSelector(state => state.productDetails)
  const{  loading, error, product } = productDetails

  // Fetching a Single Product
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back to Home
      </Link>
      {loading ? <Loader/> : error ? <Message variant = 'danger'>{error}</Message> : (
              <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Price:</strong> ${product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Description:</strong> {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Stock:</Col>
                        <Col>
                          {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
      )}

    </>
  );
};

export default ProductScreen;
