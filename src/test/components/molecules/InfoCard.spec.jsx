import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from '../../../components/molecules/InfoCard';

describe('InfoCard Component', () => {
    const props = {
        title: 'Título de prueba',
        content: 'Contenido de prueba',
    };
    it('renderiza el título y el contenido correctamente', () => {
        render(<InfoCard {...props} />);
        const title = screen.getByText('Título de prueba');
        expect(title).toBeTruthy();
        const content = screen.getByText('Contenido de prueba');
        expect(content).toBeTruthy();
    });
});