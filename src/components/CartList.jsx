import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
    const cartItems = useSelector(state => state.cart);

    return (
        <div className="cart-list">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default CartList;
