import { types } from "../types/types";

const initialState = {

    products: [],
    active: null

};

export const productoReducers = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.productoActive:
            
            return {

                ...state,
                active: {
                    ...action.payload
                }

            }

        case types.productoAddNew:

            return {

                ...state,
                products: [ action.payload, ...state.products ]

            }

        case types.productoRefresh:

            return {

                ...state,
                products: state.products.map(

                    product => product.id === action.payload.id
                        ? action.payload.product
                        : product

                ) 

            }

        case types.productLoad:

            return {

                ...state,
                products: [ ...action.payload ]

            }

        case types.productoActiveReset:

            return {

                ...state,
                active: null

            }

        case types.productDelete:

            return {

                ...state,
                active: null,
                products: state.products.filter( product => product.id !== action.payload )

            }
    
        default:

            return state;
    };

};