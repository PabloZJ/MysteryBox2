import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/organisms/Footer';

describe('Footer', () => {
    it('renderiza el título, textos y año correctamente', () => {
    render(<Footer />);
    expect(screen.getByText('Mystery Box')).toBeTruthy();
    expect(
        screen.getByText('Sorprendiéndote con cajas misteriosas llenas de emoción y diversión.')
    ).toBeTruthy();
    expect(
        screen.getByText('contacto@mysterybox.com | +56 9 1234 5678')
    ).toBeTruthy();
    const currentYear = new Date().getFullYear();
    expect(
        screen.getByText(`© ${currentYear} Mystery Box - Todos los derechos reservados`)
    ).toBeTruthy();
    });
});