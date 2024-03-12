import { Container, FormControl, Navbar, NavbarBrand, NavbarText,Dropdown,Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    <Link href="/">Shopping Cart</Link>
                </NavbarBrand>
                <NavbarText className="search">
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />

                </NavbarText>
                <Dropdown  align="end">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370 }}>
                       <span style={{ padding:10 }}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>

        </Navbar>
    )
}

export default Header