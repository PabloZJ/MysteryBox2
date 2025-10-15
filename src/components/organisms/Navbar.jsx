import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useCart } from '../../context/CartContext.jsx';
import '../../styles/organisms/Navbar.css';

function NavBar() {
    const { user, logout } = useAuth();
    const { cart } = useCart();
    const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
    <Navbar expand="lg" className="custom-navbar">
        <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
            MysteryBox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
            <Nav.Link as={Link} to="/carrito" className="cart-link">
                <i className="bi bi-cart3 cart-icon"></i>
                {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
            </Nav.Link>
            {user ? (
                <>
                    <Button variant="outline-light" onClick={logout} className="me-2">
                        Cerrar sesión
                    </Button>
                    <i className="bi bi-person-circle userh-icon"></i>
                </>
            ) : (
                <>
                    <Button as={Link} to="/login" variant="outline-light" className="me-2">
                        Iniciar sesión
                    </Button>
                    <Button as={Link} to="/registrar" variant="light">
                        Registrarse
                    </Button>
                </>
            )}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;