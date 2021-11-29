import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";

import { CrearProducto } from "./componentes/CrearProducto";
import { EditarProducto } from "./componentes/EditarProducto";
import { EditProductFullScreen } from "./componentes/complementos/EditProductFullScreen";

import "../catalogo/catalogo.css";

export const EditScreen = () => {

  return (
      <Router>

          <div className="catalogo">

            <nav className="catalogo-nav">
              <ul className="catalogo-ul">

                <li className="catalogo-list">
                  <NavLink className="catalogo-link" activeClassName="activo" to="/edit-web/crear-producto">Crear Producto</NavLink>
                </li>

                <li className="catalogo-list">
                  <NavLink className="catalogo-link" activeClassName="activo" to="/edit-web/editar-producto">Editar Producto</NavLink>
                </li>

              </ul>
            </nav>

            <hr />

            <Switch>

              <Route exact path="/edit-web/producto-edit/:productoId" component={ EditProductFullScreen } />

              <Route exact path="/edit-web/editar-producto" component={ EditarProducto } />

              <Route exact path="/edit-web/crear-producto" component={ CrearProducto } />


              <Redirect to="/edit-web/crear-producto" />

            </Switch>

          </div>

      </Router>

    );

};