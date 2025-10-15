import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MissionVision from "../organisms/MissionVision";
import TeamSection from "../organisms/TeamSection";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function NosotrosTemplate() {
    return (
    <Container className="my-5">
        <Row className="mb-5 text-center">
        <Col>
            <Title text="Sobre Nosotros" />
            <Text className="lead">
            Conoce nuestra historia, misión y el equipo que hace todo posible.
            </Text>
        </Col>
        </Row>
        <MissionVision />
        <TeamSection />
    </Container>
    );
}

export default NosotrosTemplate;