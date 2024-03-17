const initialState = {
    cart: [
        { id: 1, name: 'Велосипед', description: '*Description of bicycle*', image: 'bicycle.jpg', price: 13000, quantity: 1 },
        { id: 2, name: 'Versace Medusa Aevitas', description: 'Верх туфель сделан из вискозы и шелка, а ремешок на щиколотке украшен изображением Медузы – эмблемой бренда. Лодочки отличаются платформой – технически, их сразу две, и высота каждой – три сантиметра. Сам каблук – 15,5 сантиметра, так что для эффектного дефиле в таких придется порепетировать.', image: 'versace.jpeg', price: 200000, quantity: 2 },
        { id: 3, name: '4-х комнатная квартира', description: '*Description of bicycle*', image: 'flat.jpg', price: 15750000, quantity: 1 },
        { id: 4, name: 'Вагон', description: '*Description of bicycle*', image: 'metro.jpg', price: 3525, quantity: 1 },
        { id: 5, name: 'Огромный бассейн', description: '*Description of bicycle*', image: 'pool.jpg', price: 13000, quantity: 1 },
        { id: 6, name: 'Иконка корзины', description: '*Description of bicycle*', image: 'trash.png', price: 13000, quantity: 1 },
        { id: 7, name: 'Швабра', description: '*Description of bicycle*', image: 'wash.png', price: 13000, quantity: 1 },
        { id: 8, name: 'Арбуз', description: '*Description of bicycle*', image: 'watermelon.png', price: 13000, quantity: 1 }
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
