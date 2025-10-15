import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from '../components/organisms/ProductCard';

function Products() {
    return (
        <Container className="my-5">
            <h1 className="mb-4 text-center">Productos</h1>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;