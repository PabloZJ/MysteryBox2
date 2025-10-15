
import React from 'react';
import { render, screen } from '@testing-library/react';

const FeatureCard = ({ title, description, img }) => (
    <div data-testid="feature-card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
);

const FeaturesSection = () => {
    const features = [
    { title: 'Productos Exclusivos', description: 'Cada caja contiene artículos que no encontrarás en tiendas.', img: 'img1.jpg' },
    { title: 'Sorpresa Garantizada', description: 'Una experiencia de emoción cada vez que abres tu Mystery Box.', img: 'img2.jpg' },
    { title: 'Envío Rápido', description: 'Recibe tu caja en tiempo récord, sin complicaciones.', img: 'img3.jpg' },
    ];

    return (
    <div>
        {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
        ))}
    </div>
    );
};

describe('FeaturesSection', () => {
    it('renderiza 3 FeatureCards con título, descripción e imagen', () => {
    render(<FeaturesSection />);
    const cards = screen.getAllByTestId('feature-card');
    expect(cards.length).toBe(3);
    expect(screen.getByText('Productos Exclusivos')).toBeTruthy();
    expect(screen.getByText('Sorpresa Garantizada')).toBeTruthy();
    expect(screen.getByText('Envío Rápido')).toBeTruthy();
    const images = screen.getAllByRole('img');
    expect(images[0].src).toContain('img1.jpg');
    expect(images[1].src).toContain('img2.jpg');
    expect(images[2].src).toContain('img3.jpg');
    });
});