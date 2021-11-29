import React, { useMemo } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm/useForm";
import { useSelector } from "react-redux";
import { ProductosCard } from "../productos/ProductosCard";

export const SearchScreen = () => {

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
        <div>

            <h1>Hola Mundo</h1>

            <input
                type="text"
                placeholder="Busca tu producto"
                className="form-control" 
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
            />

            {
                productosFiltrados.map( producto => (
                    <ProductosCard key={ producto.id }
                        { ...producto } />
                ))
            }

        </div>
    );

};