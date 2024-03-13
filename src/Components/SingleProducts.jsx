import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "react-bootstrap"
import Rating from "./Rating"
import { CartState } from "../Context/Context"

const SingleProducts = ({ prod }) => {

    const {
        state: { cart },
        dispatch,
    } = CartState();
    
    console.log(cart);
    return (
        <div className="products">
            <Card>
                <CardImg variant="top" src={prod.image} alt={prod.name} />
                <CardBody>
                    <CardTitle>{prod.name}</CardTitle>
                    <CardSubtitle style={{ paddingBottom: 10 }}>
                        <span>₹{prod.price.split(".")[0]}</span>
                        {
                            prod.fastDelivery ? (
                                <div> Fast Delivery</div>
                            ) : (
                                <div>4 days delivery</div>
                            )
                        }
                        <Rating rating={prod.ratings} />
                    </CardSubtitle>
                    {
                        cart.some(p => p.id === prod.id) ? (

                            <Button onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,   
                                })
                            }} 
                            variant="danger">Remove from cart</Button> 
                        ) : (

                            <Button onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                })
                            }} >Add to Cart</Button> 
                        )
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default SingleProducts