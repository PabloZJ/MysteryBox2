import React from 'react';
import BlogTemplate from "../components/templates/BlogTemplate";
import postImg1 from "../assets/Images/post1.webp";
import postImg2 from "../assets/Images/post2.webp";
import postImg3 from "../assets/Images/post3.webp";

const posts = [
    {
    title: "Descubre nuestra nueva MysteryBox",
    summary: "Te contamos cómo seleccionamos los productos para sorprenderte en cada caja.",
    img: postImg1,
    onReadMore: () => alert("Leer más sobre nueva MysteryBox"),
    },
    {
    title: "5 ideas para regalar con MysteryBox",
    summary: "Inspírate con nuestras mejores recomendaciones para sorprender a tus amigos y familia.",
    img: postImg2,
    onReadMore: () => alert("Leer más sobre ideas de regalo"),
    },
    {
    title: "Cómo seleccionamos los productos sorpresa",
    summary: "Conoce nuestro proceso de curaduría para cada MysteryBox.",
    img: postImg3,
    onReadMore: () => alert("Leer más sobre la selección de productos"),
    },
    
];
function Blog() {
    return <BlogTemplate posts={posts} />;
}
export default Blog;