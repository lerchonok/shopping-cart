// actions/cartActions.js
export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId
});

export const updateQuantity = (itemId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { itemId, newQuantity }
});
