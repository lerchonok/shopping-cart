// reducers/cartReducer.js
import src from "*.png";

const initialState = {
    cart: [
        { id: 1, name: 'Bicycle', description: '*Description of bicycle*', image: '/resourses/bicycle.png', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', description: 'Description of product 2', image: 'product2.jpg', price: 200, quantity: 2 }
    ]
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.itemId ? { ...item, quantity: action.payload.newQuantity } : item
                )
            };
        default:
            return state;
    }
}

export default cartReducer;
