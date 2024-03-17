import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    const cartItems = useSelector(state => state.cart);
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="total">
            <p>Итого {total} руб.</p>
        </div>
    );
}

export default Total;
