import React from 'react';
import { Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import '../../styles/molecules/TeamCard.css';

function TeamCard({ name, role, img }) {
    return (
    <Card className="custom-team-card text-center h-100 shadow-sm">
        {img && <Image src={img} alt={name} className="card-img-top" />}
        <Card.Body>
        <Card.Title className="custom-team-name">{name}</Card.Title>
        <Text variant="p" className="custom-team-role">{role}</Text>
        </Card.Body>
    </Card>
    );
}

export default TeamCard;