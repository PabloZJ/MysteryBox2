import React from 'react';
import { Row, Col } from "react-bootstrap";
import BlogCard from "../molecules/BlogCard";

function BlogList({ posts }) {
    return (
    <Row className="g-4">
        {posts.map((post, idx) => (
        <Col xs={12} md={6} lg={4} key={idx}>
            <BlogCard {...post} />
        </Col>
        ))}
    </Row>
    );
}

export default BlogList;