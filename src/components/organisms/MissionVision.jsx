import React from 'react';
import { Row, Col } from "react-bootstrap";
import InfoCard from "../molecules/InfoCard";
import "../../styles/organisms/MissionVision.css";

function MissionVision() {
    return (
        <>
            <Row className="mission-vision-row">
                <Col>
                    <InfoCard
                        title="Nuestra Historia"
                        content="MysteryBox comenzó como una pequeña idea entre amigos apasionados por la sorpresa y la innovación. Queríamos crear una experiencia de compra diferente, donde cada paquete no solo contenga productos, sino emoción y descubrimiento."
                        className="mission-vision-card"
                    />
                </Col>
            </Row>
            <Row className="mission-vision-row">
                <Col md={6} className="mb-3">
                    <InfoCard
                        title="Misión"
                        content="Ofrecer a nuestros clientes experiencias de compra únicas a través de cajas sorpresa de calidad, combinando entretenimiento y productos seleccionados con atención y compromiso."
                        className="mission-vision-card"
                    />
                </Col>
                <Col md={6} className="mb-3">
                    <InfoCard
                        title="Visión"
                        content="Ser reconocidos como la tienda líder en experiencias sorpresa online, destacando por la creatividad, confiabilidad y satisfacción del cliente."
                        className="mission-vision-card"
                    />
                </Col>
            </Row>
        </>
    );
}

export default MissionVision;