import React from 'react';
import { Container } from "react-bootstrap";
import BlogList from "../organisms/BlogList";
import Title from "../atoms/Title";

function BlogTemplate({ posts }) {
    return (
    <Container className="my-5">
        <Title text="Nuestro Blog" className="mb-4 text-center" />
        <BlogList posts={posts} />
    </Container>
    );
}

export default BlogTemplate;