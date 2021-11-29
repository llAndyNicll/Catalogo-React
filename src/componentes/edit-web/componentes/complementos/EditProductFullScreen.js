import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { activeProduct, resetProductActive, startDeleteProduct, startSaveProduct } from "../../../../actions/products";
import { useForm } from "../../../../hooks/useForm/useForm";
import Swal from "sweetalert2";

export const EditProductFullScreen = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.product);

    const { products } = state;

    const getByProductId = (id) => {

        return products.find(producto => producto.id === id);

    };

    const history = useHistory();

    const { productoId } = useParams();

    const producto = getByProductId(productoId);

    // console.log( producto );

    if (!producto) {

        <Redirect to="/edit-web/crear-producto" />

    };

    const [inputValue, handleInputChange, reset] = useForm(producto);

    const {
        id,
        nombre,
        descripcion,
        precio1,
        precio2,
        marca,
        cantidad,
        caracteristicas,
        url,
        tipo,
        search

    } = inputValue;

    const activeId = useRef(producto.id);

    useEffect(() => {

        if (producto.id !== activeId.current) {

            reset(producto);
            activeId.current = producto.id

        }

    }, [producto, reset]);

    useEffect(() => {

        dispatch(activeProduct(id, inputValue));

    }, [inputValue, dispatch, id]);

    const handleReturn = () => {

        dispatch(resetProductActive());

        history.push('/edit-web/editar-producto');

    };

    const handleSave = () => {

        dispatch(startSaveProduct(inputValue));

        dispatch(resetProductActive());

        history.push('/edit-web/editar-producto');

    };

    const handleDelet = () => {

        dispatch(startDeleteProduct(id));

        history.push('/edit-web/editar-producto');

        Swal.fire( 'Eliminado', producto.name, 'success' );
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
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </h1>
                </div>

                <div className="productos-full-columna1">
                    <img src={url} alt={nombre} />
                </div>

                <div className="productos-full-columna2">

                    <div className="productos-full-marca">
                        <p>
                            <input
                                type="text"
                                placeholder="Marca del producto"
                                name="marca"
                                autoComplete="off"
                                value={marca}
                                onChange={handleInputChange}
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
                                value={cantidad}
                                onChange={handleInputChange}
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
                                value={precio1}
                                onChange={handleInputChange}
                            />
                        </p>
                        <h3>Precio NO Socio</h3>
                        <p className="precio">
                            <input
                                type="text"
                                placeholder="Precio NO socio del producto"
                                name="precio2"
                                autoComplete="off"
                                value={precio2}
                                onChange={handleInputChange}
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
                                value={descripcion}
                                onChange={handleInputChange}
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
                                value={caracteristicas}
                                onChange={handleInputChange}
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

            <button className="productos-full-btn" onClick={handleReturn}>
                Atras
            </button>

            <button className="productos-full-btn-guardar" onClick={handleSave}>
                Guardar
            </button>

            <button className="productos-full-btn-eliminar" onClick={handleDelet}>
                Eliminar Producto
            </button>

        </div>
    );

};