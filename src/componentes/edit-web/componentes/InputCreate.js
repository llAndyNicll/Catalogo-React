import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { activeProduct, resetProductActive, startDeleteProduct, startSaveProduct, startUploading } from "../../../actions/products";
import { useForm } from "../../../hooks/useForm/useForm";

export const InputCreate = () => {

    const history = useHistory();

    const state = useSelector( state => state.product );

    const { active: producto } = state;

    const dispatch = useDispatch();

    const [ inputValue, handleInputChange, reset ] = useForm( producto ); 

    const { nombre, descripcion, precio1, precio2, tipo, search, marca, cantidad, caracteristicas, id } = inputValue;

    const activeId = useRef( producto.id );

    useEffect( () => {

        if ( producto.id !== activeId.current ) {

            reset( producto );
            activeId.current = producto.id

        }

    }, [ producto, reset ] );

    useEffect( () => {

        dispatch( activeProduct( inputValue.id, { ...inputValue } ) );

    }, [ inputValue, dispatch ] );

    const handleSave = () => {

        dispatch( startSaveProduct( producto ) );

        dispatch( resetProductActive() );

    };

    const handleClickImg = () => {

        document.querySelector( '#fileSelector' ).click();

    };

    const handleFileChange = ( e ) => {

        const file = ( e.target.files[ 0 ] );

        if ( file ) {

            dispatch( startUploading( file ) );

        };

    };

    const handleCancel = () => {

        dispatch( startDeleteProduct( id ) );

        dispatch( resetProductActive() )

        history.push( '/edit-web/crear-producto' );
    };
    
    return (
        <div className="productos-full animate__animated animate__fadeIn animate__faster">

            <div className="productos-full-columnas">

                <div className="productos-full-nombre">
                    <h1>
                        <input
                            type="text"
                            placeholder="Nombre del producto..."
                            name="nombre"
                            autoComplete="off"
                            value={ nombre }
                            onChange={ handleInputChange }
                        />
                    </h1>
                </div>

                <div className="productos-full-columna1">

                    {
                        ( producto.url )
                            && 
                                (  
                                    <img src={ producto.url } alt={ nombre } />
                                )
                    }

                </div>

                <div className="productos-full-columna2">

                    <div className="productos-full-marca">
                        <p>
                            <input
                                type="text"
                                placeholder="Marca del producto"
                                name="marca"
                                autoComplete="off"
                                value={ marca }
                                onChange={ handleInputChange }
                            />
                        </p>
                    </div>

                    <div className="productos-full-cantidad">
                        <p>
                            <input
                                type="text"
                                placeholder="Cantidad del producto"
                                name="cantidad"
                                autoComplete="off"
                                value={ cantidad }
                                onChange={ handleInputChange }
                            />
                        </p>
                    </div>

                    <div className="producto-precio">
                        <h3>Precio Socio</h3>
                        <p className="precio">
                            <input
                                type="text"
                                placeholder="Precio socio del producto"
                                name="precio1"
                                autoComplete="off"
                                value={ precio1 }
                                onChange={ handleInputChange }
                            />
                        </p>
                        <h3>Precio NO Socio</h3>
                        <p className="precio">
                            <input
                                type="text"
                                placeholder="Precio NO socio del producto"
                                name="precio2"
                                autoComplete="off"
                                value={ precio2 }
                                onChange={ handleInputChange }
                            />
                        </p>
                    </div>

                </div>

                <div className="productos-descrip-total">
                    <div className="productos-full-descri">
                        <h1>Descripcion</h1>
                        <p>
                            <textarea
                                type="text"
                                placeholder="Descripcion del producto"
                                name="descripcion"
                                autoComplete="off"
                                value={ descripcion }
                                onChange={ handleInputChange }
                            ></textarea>
                        </p>
                    </div>

                    <div className="productos-full-caracteristica">
                        <h1>Caracteristicas Principales</h1>
                        <p>
                            <textarea
                                type="text"
                                placeholder="Caracteristicas del producto"
                                name="caracteristicas"
                                autoComplete="off"
                                value={ caracteristicas }
                                onChange={ handleInputChange }
                            ></textarea>
                        </p>
                    </div>
                </div>

                <div className="productos-descrip-total">
                    <div className="productos-full-descri">
                        <h1>Tipo</h1>
                        <p>
                            <textarea
                                type="text"
                                placeholder="Tipo del producto"
                                name="tipo"
                                autoComplete="off"
                                value={ tipo }
                                onChange={handleInputChange}
                            ></textarea>
                        </p>
                    </div>

                    <div className="productos-full-caracteristica">
                        <h1>PathName</h1>
                        <p>
                            <textarea
                                type="text"
                                placeholder="PathName del producto"
                                name="search"
                                autoComplete="off"
                                value={ search }
                                onChange={handleInputChange}
                            ></textarea>
                        </p>
                    </div>
                </div>

            </div>

            <button className="productos-full-btn-guardar" onClick={ handleSave }>
                Guardar
            </button>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange } 
            />

            <button className="productos-full-btn" onClick={ handleClickImg }>
                Agregar imagen
            </button>

            <button className="productos-full-btn-eliminar" onClick={ handleCancel }>
                Cancelar
            </button>

        </div>
    );

}