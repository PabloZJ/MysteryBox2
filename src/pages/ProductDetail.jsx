import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import { useCart } from '../context/CartContext.jsx';
import '../styles/pages/ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();

    if (!product) {
    return (
        <Container className="my-5 text-center">
        <Text variant="h2">Producto no encontrado</Text>
        </Container>
    );
    }

    return (
        <Container className="my-5">
        <Card className="product-detail-card shadow-sm mx-auto">
        <Image
            src={product.image}
            alt={product.name}
            className="product-detail-image"
        />
        <Card.Body className="text-center">
            <Text variant="h2" className="mb-3">{product.name}</Text>
            <Text variant="p" className="mb-3">{product.description}</Text>
            <Text variant="h4" className="mb-3">${product.price}</Text>
            <Button
            className="custom-add-button"
            onClick={() => addToCart(product)}
            >
            Agregar al Carrito
            </Button>
        </Card.Body>
        </Card>
    </Container>
    );
}

export default ProductDetail;