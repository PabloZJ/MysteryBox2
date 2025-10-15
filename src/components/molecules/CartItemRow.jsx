import React from 'react';

function CartItemRow({ item, onRemove, dataTestId }) {
  return (
    <tr data-testid={dataTestId}>
      <td data-testid={`cart-name-${item.id}`} className="cart-item-name">{item.name}</td>
      <td data-testid={`cart-price-${item.id}`} className="cart-item-price">${item.price}</td>
      <td data-testid={`cart-quantity-${item.id}`} className="cart-item-quantity">{item.quantity}</td>
      <td data-testid={`cart-subtotal-${item.id}`} className="cart-item-subtotal">${item.price * item.quantity}</td>
      <td className="cart-item-actions">
        <button 
          className="custom-btn btn btn-danger btn-sm" 
          type="button" 
          onClick={() => onRemove(item.id)}
          data-testid={`cart-remove-${item.id}`}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default CartItemRow;