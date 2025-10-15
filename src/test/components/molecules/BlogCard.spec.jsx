import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogCard from '../../../components/molecules/BlogCard';

describe('BlogCard Component', () => {

    const mockProps = {
    title: 'Mi Blog',
    summary: 'Resumen del blog',
    img: 'Box1.webp',
    onReadMore: jasmine.createSpy('onReadMore'),
    };

    it('renderiza título y resumen', () => {
    render(<BlogCard {...mockProps} />);
    expect(screen.getByText('Mi Blog')).toBeTruthy();
    expect(screen.getByText('Resumen del blog')).toBeTruthy();
    });

    it('renderiza la imagen', () => {
    render(<BlogCard {...mockProps} />);
    const img = screen.getByAltText('Mi Blog');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBeTruthy();
    });

    it('llama a onReadMore al hacer click en el botón', () => {
    render(<BlogCard {...mockProps} />);
    const button = screen.getByText('Leer más');
    fireEvent.click(button);
    expect(mockProps.onReadMore).toHaveBeenCalled();
    });
});