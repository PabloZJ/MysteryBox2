import React from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/CardBody.css';

function CardBody({ title, description, price }) {
    return (
    <div className="custom-card-body">
        <Text variant="h5" className="card-title">{title}</Text>
        <Text variant="p" className="card-description">{description}</Text>
        <Text variant="span" className="card-price text-muted">
        ${price.toLocaleString()}
        </Text>
    </div>
    );
}

export default CardBody;