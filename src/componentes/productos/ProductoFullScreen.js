import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { activeProduct, resetProductActive } from "../../actions/products";

export const ProductoFullScreen = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.product );

    const { products } = state;

    const getByProductId = ( id ) => {

        return products.find( producto => producto.id === id );
    
    };

    const history = useHistory();

    const { productoId } = useParams();

    const producto = getByProductId( productoId );

    // console.log( producto );

    if ( !producto ) {

        <Redirect to="/catalogo/categoria" />

    };

    const {
        id,
        nombre,
        descripcion,
        url,
        precio1,
        precio2,
        search,
        marca,
        cantidad,
        caracteristicas,

    } = producto; 

    useEffect( () => {

        dispatch( activeProduct( id, producto ) );

    }, [ producto, dispatch, id ] );

    const handleReturn = () => {

        history.push( `/catalogo/categoria/${ search }` );

        dispatch( resetProductActive() );

    };

    return (
        <div className="productos-full animate__animated animate__fadeIn animate__faster">

            <div className="productos-full-columnas">

                <div className="productos-full-nombre">
                    <h1>{ nombre }</h1>
                </div>

                <div className="productos-full-columna1">
                    <img src={ url } alt={ nombre } />
                </div>

                <div className="productos-full-columna2">

                    <div className="productos-full-marca">
                        <p>{ marca }</p>
                    </div>

                    <div className="productos-full-cantidad">
                        <p>{ cantidad }</p>
                    </div>

                    <div className="producto-precio">
                        <h3>Precio Socio</h3>
                        <p className="precio">{ precio1 }</p>
                        <h3>Precio NO Socio</h3>
                        <p className="precio">{ precio2 }</p>
                    </div>

                </div>

            </div>

            <div className="productos-descrip-total">
                <div className="productos-full-descrip">
                    <h1>Descripcion</h1>
                    <p>{ descripcion }</p>
                </div>

                <div className="productos-full-caracteristicas">
                    <h1>Caracteristicas Principales</h1>
                    <p>{ caracteristicas }</p>
                </div>
            </div>

            <button className="productos-full-btn" onClick={ handleReturn }>
                Atras
            </button>

        </div>
    );

}; 