import React from "react";
import { Link } from "react-router-dom";

export const ProductosCard = ({

    id,
    url,
    nombre,
    cantidad,
    precio1

}) => {

    return (
        <div className="productos-card">

            <div className="productos-tarjeta">

                <div className="productos-img">
                    <img src={ url } alt={ nombre } />
                </div>

                <hr/>

                <div className="productos-nombre">
                    <h2>{ nombre }</h2>
                </div>

                <div className="productos-descripcion">
                    <p className="descripcion">{ cantidad }</p>
                </div>

                <div className="productos-precio">
                    <h3>Precio Socio</h3>
                    <p className="precio">{ precio1 }</p>
                </div>

                <div className="productos-mas">
                    <button className="productos-button">
                        <Link to={ `/catalogo/producto/${ id }` }>
                            Mas
                        </Link>
                    </button>
                </div>

            </div>

        </div>
    );

};