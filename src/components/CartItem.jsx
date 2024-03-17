// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/cartActions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleQuantityChange = (change) => {
        dispatch(updateQuantity(item.id, item.quantity + change));
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Quantity:
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    {item.quantity}
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </p>
                <p>Price: {item.price} руб.</p>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
