import React, { useMemo } from "react";
import { ProductosCard } from "./ProductosCard";
import { useSelector } from "react-redux";
import "./productos.css";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm/useForm";
import queryString from "query-string";

export const ProductosScreen = ({ tipo }) => {

    const state = useSelector( state => state.product );

    const { products } = state;

    const getByProductTipo = ( tipo ) => {

        const validTipo = [ 
                'Despensa', 
                'Frescos y Lacteos', 
                'Bebidas y Licores', 
                'Carnes y Pescados',
                'Colaciones',
                'Congelados',
                'Desayunos y Dulces',
                'Frescos y Lacteos',
                'Frutas y Verduras',
                'Hogar',
                'Limpieza y Aseo',
                'Mascotas',
                'Mundo Bebe',
                'Panaderia y Pasteleria',
                'Perfumeria y Salud'
            ];
    
        if ( !validTipo.includes( tipo ) ) {
    
            throw new Error( `Tipo "${ tipo }" no es correcto` )
    
        } else {
    
            return products.filter( producto => producto.tipo === tipo )
    
        }
    
    };

    const productos = getByProductTipo( tipo );

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

        return productos.filter( producto => producto.nombre.toLocaleLowerCase().includes( name ) )
    };

    const productosFiltrados = getByProductName( searchText );

    return (
        <div>

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
                    : ( productos.map( productoTipo => (
                        <ProductosCard key={ productoTipo.id }
                            { ...productoTipo }
                        />
                    )))
            }

        </div>

        </div>
    );

};