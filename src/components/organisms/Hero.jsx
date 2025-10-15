import React from 'react';
import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import "../../styles/organisms/Hero.css";

function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <div className="custom-hero">
            <div className="hero-content">
                <Title 
                    text="Descubre la emoción de nuestras Mystery Boxes" 
                    className="display-4" 
                />
                <Text className="lead">
                    Sorpréndete cada mes con productos seleccionados especialmente para ti.
                </Text>
                <Button className="custom-hero-btn" onClick={handleClick}>
                    Comprar Ahora
                </Button>
            </div>
        </div>
    );
}

export default Hero;