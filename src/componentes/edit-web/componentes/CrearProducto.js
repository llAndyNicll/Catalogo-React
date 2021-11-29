import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewProduct } from "../../../actions/products";
import { InputCreate } from "./InputCreate";

export const CrearProducto = () => {

    const state = useSelector( state => state.product );

    const { active: producto } = state;

    const dispatch = useDispatch();

    const handleCreateProduct = () => {

        dispatch( startNewProduct() );

    };

    return (
        <div className="categoria-columna2">

            <div className="productos-full animate__animated animate__fadeIn animate__faster">

                {
                    ( producto )
                        &&
                            ( <InputCreate /> )
                }

                {
                    ( !producto )
                        &&
                            (<div className="btn-categoria">
                                <button onClick={ handleCreateProduct }>
                                    Nuevo Producto + 
                                </button>
                            </div>)
                }

            </div>
            
        </div>
    );

};