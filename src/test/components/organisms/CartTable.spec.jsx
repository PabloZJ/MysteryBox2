import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import CartTable from '../../../components/organisms/CartTable';

describe('CartTable Component', () => {

    const mockCart = [
    { id: 1, name: 'Producto 1', price: 500, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 300, quantity: 1 },
    ];
    const mockRemove = jasmine.createSpy('mockRemove');
    beforeEach(() => {
    render(<CartTable cart={mockCart} onRemove={mockRemove} />);
    });
    it('renderiza todos los productos del carrito correctamente', () => {
    mockCart.forEach(item => {
        const row = screen.getByTestId(`cart-row-${item.id}`);
        expect(within(row).getByTestId(`cart-name-${item.id}`).textContent).toBe(item.name);
        expect(within(row).getByTestId(`cart-price-${item.id}`).textContent).toBe(`$${item.price}`);
        expect(within(row).getByTestId(`cart-quantity-${item.id}`).textContent).toBe(`${item.quantity}`);
        expect(within(row).getByTestId(`cart-subtotal-${item.id}`).textContent).toBe(`$${item.price * item.quantity}`);
    });
    });
    it('elimina un producto cuando se hace click en el botón eliminar', () => {
    const row = screen.getByTestId('cart-row-1');
    const removeButton = within(row).getByTestId('cart-remove-1');
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledWith(1);
    });
});