import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogCard from '../../../components/molecules/BlogCard';

describe('BlogCard Component', () => {
    const mockReadMore = jasmine.createSpy('onReadMore');
    const props = {
    title: 'Post 1',
    summary: 'Resumen 1',
    img: 'fake-image1.jpg',
    onReadMore: mockReadMore,
    };
    it('renderiza título, resumen e imagen', () => {
    render(<BlogCard {...props} />);
    expect(screen.getByText('Post 1')).toBeTruthy();
    expect(screen.getByText('Resumen 1')).toBeTruthy();
    const image = screen.getByAltText('Post 1');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('fake-image1.jpg');
    });
    it('llama a onReadMore al hacer click en el botón', () => {
    render(<BlogCard {...props} />);
    const button = screen.getByText('Leer más');
    fireEvent.click(button);
    expect(mockReadMore).toHaveBeenCalled();
    });
});