import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Atom', () => {
    it('renderiza con texto', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeTruthy();
    });

    it('aplica clases y props', () => {
    render(<Button className="extra" variant="primary" type="submit">Click</Button>);
    const btn = screen.getByText('Click');
    expect(btn).toHaveClass('custom-btn');
    expect(btn).toHaveClass('extra');
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn).toHaveClass('btn-primary');
    });

    it('responde a onClick', () => {
    const handleClick = jasmine.createSpy('handleClick');
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
    });
});