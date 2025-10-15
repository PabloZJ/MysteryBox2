import React from 'react';
import { Row, Col } from "react-bootstrap";
import TeamCard from "../molecules/TeamCard";
import tulio from "../../assets/Images/tulio.webp";
import bodoque from "../../assets/Images/bodododo.webp";
import mario from "../../assets/Images/mario.webp";

function TeamSection() {
    const team = [
    { name: "Pablo Zúñiga", role: "CEO & Fundador", img: tulio },
    { name: "Sebastian Vargas", role: "Director de Marketing", img: bodoque },
    { name: "Lucas Aliaga", role: "Jefe de Desarrollo", img: mario },
    ];

    return (
    <>
        <Row>
        <Col>
            <h2 className="mb-4 text-center">Nuestro Equipo</h2>
        </Col>
        </Row>
        <Row>
        {team.map((member, idx) => (
            <Col md={4} className="mb-3" key={idx}>
                <TeamCard {...member} />
            </Col>
        ))}
        </Row>
    </>
    );
}

export default TeamSection;