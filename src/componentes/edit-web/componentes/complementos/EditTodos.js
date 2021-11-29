import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useForm } from "../../../../hooks/useForm/useForm";
import { EditProductosCard } from "./EditProductosCard";
import queryString from "query-string";

export const EditTodos = () => {

    const state = useSelector( state => state.product );

    const { products } = state;

    const locations = useLocation();

    const { q = '' } = useMemo( () => queryString.parse( locations.search ), [ locations.search ] );

    const [ inputValue, handleInputChange ] = useForm({

        searchText: q

    });

    const { searchText } = inputValue;

    const getByProductName = ( name = '' ) => {

        if ( name === '' ) {

            return [];

        };

        name = name.toLocaleLowerCase();

        return products.filter( producto => producto.nombre.toLocaleLowerCase().includes( name ) )
    };

    const productosFiltrados = getByProductName( searchText );

    return (
        <div className="categoria-columna2">

            <div className="categoria-fila">

                <div className="categoria-fila-input">
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder="Busca tu producto..."
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                    />
                </div>

            </div>

            <div className="productos animate__animated animate__fadeIn animate__faster">

                {
                    ( searchText.length >= 1 )
                        ? ( productosFiltrados.map( productoFiltro => (
                            <EditProductosCard key={ productoFiltro.id }
                                { ...productoFiltro }
                            />
                        )))
                        : ( products.map( productoTipo => (
                            <EditProductosCard key={ productoTipo.id }
                                { ...productoTipo }
                            />
                        )))
                }

            </div>

        </div>
    );

};