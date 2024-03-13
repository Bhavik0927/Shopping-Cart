import { Container, FormControl, Navbar, NavbarBrand, NavbarText, Dropdown, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";


const Header = () => {

    const {
        state: { cart },
        dispatch
    } = CartState();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    <Link to="/">Shopping Cart</Link>
                </NavbarBrand>
                <NavbarText className="search">
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />

                </NavbarText>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        {
                            cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((prod) => (
                                            <span className="cartitem" key={prod.id}>
                                                <img src={prod.image} className="cartItemImg" alt={prod.name} />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>₹ {prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod
                                                    })} />
                                            </span>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>Cart is Empty!</span>)
                        }

                    </Dropdown.Menu>
                </Dropdown>
            </Container>

        </Navbar>
    )
}

export default Header