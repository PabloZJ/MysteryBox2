import React from 'react';
import { Card } from "react-bootstrap";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import '../../styles/molecules/BlogCard.css';

function BlogCard({ title, summary, img, onReadMore }) {
    return (
    <Card className="custom-blog-card mb-4">
        {img && <Image src={img} alt={title} className="custom-image card-img-top" />}
        <Card.Body>
            <Title text={title} className="h5" />
            <Text>{summary}</Text>
            <Button  onClick={onReadMore} className="custom-btnn mt-2">
                Leer más
            </Button>
        </Card.Body>
    </Card>
    );
}

export default BlogCard;