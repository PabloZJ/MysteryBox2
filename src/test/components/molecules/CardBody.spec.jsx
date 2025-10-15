import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Component', () => {
    const props = { title: 'Producto', description: 'Desc', price: 1000 };

    it('renderiza título, descripción y precio', () => {
    render(<CardBody {...props} />);
    expect(screen.getByText('Producto')).toBeTruthy();
    expect(screen.getByText('Desc')).toBeTruthy();
    const price = screen.getByText(/\$\s*1000/);
    expect(price).toBeTruthy();
    });
});