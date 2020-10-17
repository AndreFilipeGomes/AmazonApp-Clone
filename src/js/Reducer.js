//DataLayer Logic
export const initialState ={
    basket:[],
    user: null,
}

//Selecter => 0 is the initial value
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


//mutual updates
//state-> dataLayor __ action -> actions to manipulate the data layer
const reducer = (state, action)  => {
    
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            //logic to add to basket
            // console.log(state);
            // console.log(action.item);

            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            //logic to add to basket

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItems) => basketItems.id === action.id);

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Item with ${action.id} doesn't existe`);
            }

            return {...state, basket: newBasket};

        default:
            return {state};
    }
}

export default reducer;