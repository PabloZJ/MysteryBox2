import React from 'react';
import { Card } from "react-bootstrap";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import '../../styles/molecules/InfoCard.css';

function InfoCard({ title, content }) {
    return (
    <Card className="custom-info-card h-100 p-3 shadow-sm">
        <Card.Body>
        <Title text={title} className="h5 custom-info-title" />
        <Text variant="p" className="custom-info-text">{content}</Text>
        </Card.Body>
    </Card>
    );
}

export default InfoCard;
