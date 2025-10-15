import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../components/atoms/Input';

describe('Input Atom', () => {
    it('renderiza y responde a cambios', () => {
    const handleChange = jasmine.createSpy('handleChange');
    render(<Input value="" onChange={handleChange} placeholder="Escribe" />);
    const input = screen.getByPlaceholderText('Escribe');
    fireEvent.change(input, { target: { value: 'Hola' } });
    expect(input).toBeTruthy();
    expect(handleChange).toHaveBeenCalled();
    });

    it('aplica clases y props', () => {
    render(<Input className="extra" type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
    expect(input).toHaveClass('extra');
    expect(input.getAttribute('type')).toBe('email');
    });
});