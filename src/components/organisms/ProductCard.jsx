import React from 'react';
import { Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../styles/organisms/ProductCard.css";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <Card className="product-card shadow-sm">
            <Image 
                src={product.image} 
                alt={product.name} 
                className="card-img-top product-image" 
            />
            <Card.Body>
                <CardBody
                    title={product.name}
                    description={product.description}
                    price={product.price}
                />
                <div className="product-card-buttons mt-3">
                    <Button
                        variant="secondary"
                        className="me-2"
                        onClick={() => navigate(`/products/${product.id}`)}
                    >
                        Ver detalles
                    </Button>
                    <Button
                        className="custom-add-button"
                        onClick={() => addToCart(product)}
                    >
                        Agregar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
