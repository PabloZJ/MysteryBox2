import React from 'react';
import { Card } from "react-bootstrap";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import '../../styles/molecules/FeatureCard.css';

function FeatureCard({ title, description, img }) {
    return (
    <Card className="custom-feature-card text-center h-100 p-3 mb-4 shadow-sm">
        {img && <Image src={img} alt={title} className="custom-feature-img mb-3" />}
        <Title text={title} className="h5 custom-feature-title" />
        <Text variant="p" className="custom-feature-text">{description}</Text>
    </Card>
    );
}

export default FeatureCard;