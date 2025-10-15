import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItemRow from '../../../components/molecules/CartItemRow';

describe('CartItemRow Component', () => {
  const mockItem = { id: 1, name: 'Producto', price: 1000, quantity: 2 };
  const mockRemove = jasmine.createSpy('onRemove');

  beforeEach(() => {
    mockRemove.calls.reset();
  });

  it('renderiza nombre, precio, cantidad y subtotal', () => {
    render(
      <table>
        <tbody>
          <CartItemRow item={mockItem} onRemove={mockRemove} />
        </tbody>
      </table>
    );

    expect(screen.getByText('Producto')).toBeTruthy();
    expect(screen.getByText(/\$\s*1000/)).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText(/\$\s*2000/)).toBeTruthy();
  });

  it('botón Eliminar llama a onRemove con id correcto', () => {
    render(
      <table>
        <tbody>
          <CartItemRow item={mockItem} onRemove={mockRemove} />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByText('Eliminar'));
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});