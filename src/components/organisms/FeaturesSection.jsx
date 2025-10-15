import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import FeatureCard from "../molecules/FeatureCard";
import benefit1 from "../../assets/Images/home1.webp";
import benefit2 from "../../assets/Images/home2.webp";
import benefit3 from "../../assets/Images/home3.webp";
import '../../styles/organisms/FeaturesSection.css';

function FeaturesSection() {
    const features = [
    { title: "Productos Exclusivos", description: "Cada caja contiene artículos que no encontrarás en tiendas.", img: benefit1 },
    { title: "Sorpresa Garantizada", description: "Una experiencia de emoción cada vez que abres tu Mystery Box.", img: benefit2 },
    { title: "Envío Rápido", description: "Recibe tu caja en tiempo récord, sin complicaciones.", img: benefit3 },
    ];

    return (
    <Container className="custom-features-section my-5">
        <Row>
        {features.map((feature, idx) => (
            <Col md={4} key={idx}>
            <FeatureCard {...feature} className="custom-feature-card" />
            </Col>
        ))}
        </Row>
    </Container>
    );
}

export default FeaturesSection;