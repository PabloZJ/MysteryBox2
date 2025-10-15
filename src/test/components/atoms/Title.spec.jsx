import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../../components/atoms/Title';

describe('Title Atom', () => {
    it('renderiza el título con clase', () => {
    render(<Title text="Hola" className="extra" />);
    const el = screen.getByText('Hola');
    expect(el).toBeTruthy();
    expect(el).toHaveClass('custom-title');
    expect(el).toHaveClass('extra');
    });
});