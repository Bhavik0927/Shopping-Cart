import { Button, Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { useEffect, useState } from "react";
import Rating from './Rating.jsx';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {

  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {
            cart.map((prod) => (
              <ListGroupItem key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}> ₹ {prod.price}</Col>
                  <Col md={2}>
                    <Rating rating={prod.rating} />
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })}
                    >

                      <AiFillDelete fontSize="20px " />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summery">
        <span className="title">Subtotal({cart.length})items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total:₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart