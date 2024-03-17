import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/cartActions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleQuantityChange = (change) => {
        const newQuantity = item.quantity + change;
        if (newQuantity >= 1 && newQuantity <= 10) {
            dispatch(updateQuantity(item.id, newQuantity));
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Quantity:
                    <button className="button plus_minus" onClick={() => handleQuantityChange(-1)}>-</button>
                    {item.quantity}
                    <button className="button plus_minus" onClick={() => handleQuantityChange(1)}>+</button>
                </p>
                <p>Price: {item.price} руб.</p>
                <button className="button remove" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
