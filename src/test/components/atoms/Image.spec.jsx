import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image Atom', () => {

    it('renderiza la imagen con src y alt correctos', () => {
    render(<Image src="Box1.webp" alt="Imagen de prueba" />);
    const img = screen.getByAltText('Imagen de prueba');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBe('Box1.webp');
    });

    it('aplica la clase custom-img y cualquier clase extra', () => {
    render(<Image src="Box1.webp" alt="Imagen" className="extra-class" />);
    const img = screen.getByAltText('Imagen');
    expect(img).toHaveClass('custom-img');
    expect(img).toHaveClass('extra-class');
    });

});