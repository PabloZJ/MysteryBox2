import React from 'react';
import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CartTable from "../components/organisms/CartTable";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";
import "../styles/pages/Carrito.css";

function Carrito() {
    const { cart, removeFromCart, clearCart, total } = useCart();

    if (cart.length === 0) {
        return (
            <Container className="cart-container text-center">
                <Text variant="h2" className="cart-empty">Tu carrito está vacío</Text>
            </Container>
        );
    }

    return (
        <Container className="cart-container">
            <Text variant="h1" className="cart-title">Tu Carrito</Text>
            <CartTable cart={cart} onRemove={removeFromCart} className="cart-table" />
            <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
                <Text variant="h4" className="cart-total">Total: ${total.toLocaleString()}</Text>
                <div className="cart-buttons mt-2 mt-md-0">
                    <Button variant="outline-danger" onClick={clearCart} className="me-2">
                        Vaciar carrito
                    </Button>
                    <Button variant="success">
                        Finalizar compra
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Carrito;
