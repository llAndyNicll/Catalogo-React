import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { ProductosCard } from "../../productos/ProductosCard";
import queryString from "query-string";
import { useForm } from "../../../hooks/useForm/useForm";

export const Todos = () => {

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
                            <ProductosCard key={ productoFiltro.id }
                                { ...productoFiltro }
                            />
                        )))
                        : ( products.map( productoTipo => (
                            <ProductosCard key={ productoTipo.id }
                                { ...productoTipo }
                            />
                        )))
                }

            </div>

        </div>
    );

}; 