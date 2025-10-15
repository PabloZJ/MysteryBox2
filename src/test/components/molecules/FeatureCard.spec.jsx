import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureCard from '../../../components/molecules/FeatureCard';

describe('FeatureCard Component', () => {

    const props = {
        title: 'Mi título',
        description: 'Descripción de prueba',
        img: 'fake-image.jpg',
    };

    it('renderiza la imagen, el título y el texto', () => {
        render(<FeatureCard {...props} />);
        const img = screen.getByAltText('Mi título');
        expect(img).toBeTruthy();
        const title = screen.getByText('Mi título');
        expect(title).toBeTruthy();
        const description = screen.getByText('Descripción de prueba');
        expect(description).toBeTruthy();
    });
});