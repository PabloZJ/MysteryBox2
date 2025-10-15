import React from 'react';
import CartItemRow from "../molecules/CartItemRow";
import '../../styles/organisms/CartTable.css';

function CartTable({ cart, onRemove }) {
    if (!cart) return null;
    return (
    <table className="custom-table" data-testid="cart-table">
        <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {cart.map((item) => (
            <CartItemRow 
            key={item.id} 
            item={item} 
            onRemove={onRemove} 
            dataTestId={`cart-row-${item.id}`}
            />
        ))}
        </tbody>
        </table>
    );
}

export default CartTable;