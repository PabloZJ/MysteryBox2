import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../../../components/organisms/Hero';

describe('Hero', () => {
    it('renderiza el título y el botón', () => {
    render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>
    );

    expect(screen.getByText(/Descubre la emoción/i)).toBeTruthy();
    expect(screen.getByText(/Comprar Ahora/i)).toBeTruthy();
    });
});