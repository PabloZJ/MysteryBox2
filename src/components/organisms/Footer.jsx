import React from "react";
import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import "../../styles/organisms/Footer.css";

function Footer() {
    return (
    <footer className="custom-footer mt-5">
        <Container className="text-center">
        <Title text="Mystery Box" className="title-footer h5 mb-3" />
        <Text className="text-light">
            Sorprendiéndote con cajas misteriosas llenas de emoción y diversión.
        </Text>
        <Text className="text-secondary mb-3">
            contacto@mysterybox.com | +56 9 1234 5678
        </Text>
        <hr />
        <Text className="text-secondary small">
            © {new Date().getFullYear()} Mystery Box - Todos los derechos reservados
        </Text>
        </Container>
    </footer>
    );
}

export default Footer;