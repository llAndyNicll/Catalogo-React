import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";
  
import { BebidasYLicores } from "./componentes/BebidasYLicores";
import { CarneYPescado } from "./componentes/CarneYPescado";
import { Colaciones } from "./componentes/Colaciones";
import { Congelados } from "./componentes/Congelados";
import { DesayunosYDulces } from "./componentes/DesayunosYDulces";
import { Despensa } from "./componentes/Despensa";
import { FrescosYLacteos } from "./componentes/FrescosYLacteos";
import { FrutasYVerduras } from "./componentes/FrutasYVerduras";
import { Hogar } from "./componentes/Hogar";
import { LimpiezaYAseo } from "./componentes/LimpiezaYAseo";
import { Mascotas } from "./componentes/Mascotas";
import { MundoBebe } from "./componentes/MundoBebe";
import { PanaderiaYPasteleria } from "./componentes/PanaderiaYPasteleria";
import { PerfumeYSalud } from "./componentes/PerfumeriaYSalud";
import { Todos } from "./componentes/Todos";
import { ProductoFullScreen } from "../productos/ProductoFullScreen";

import "./catalogo.css";

export const Catalogo = () => {

  const [ categoriaValid, setCategoriaCalid ] = useState( false );

  const handleCategoria = () => {

    setCategoriaCalid( !categoriaValid );

  };

  return (
      <Router>

          <div className="catalogo">

          <div className="btn-categoria">
            <button onClick={ handleCategoria }>
              Selecciona una Categoria<i className="fas fa-arrow-down"></i>
            </button>
          </div>

          {
            ( categoriaValid )
                &&
                ( 
              <nav className="catalogo-nav animate__animated animate__fadeIn animate__faster">
                <ul className="catalogo-ul">
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria">Todos</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/carnes-pescados">Carnes Y Pescados</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/congelados">Congelados</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/frutas-verduras">Frutas Y Verduras</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/frescos-lacteos">Frescos Y Lacteos</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/panaderia-pasteleria">Panaderia Y Pasteleria</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/desayuno-dulces">Desayuno Y Dulces</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/colaciones">Colaciones</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/despensa">Despensa</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/bebidas-licores">Bebidas Y Licores</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/mascotas">Mascotas</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/mundo-bebe">Mundo Bebe</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/limpieza-aseo">Limpieza Y Aseo</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/perfumeria-salud">Perfumeria Y Salud</NavLink>
                  </li>
  
                  <li className="catalogo-list">
                    <NavLink className="catalogo-link" activeClassName="activo" to="/catalogo/categoria/hogar">Hogar</NavLink>
                  </li>
  
                </ul>
              </nav>
            )
          }

            <hr />

            <Switch>

              <Route exact path="/catalogo/categoria/carnes-pescados" component={ CarneYPescado } />

              <Route path="/catalogo/categoria/congelados" component={ Congelados } />

              <Route path="/catalogo/categoria/frutas-verduras" component={ FrutasYVerduras } />

              <Route path="/catalogo/categoria/frescos-lacteos" component={ FrescosYLacteos } />

              <Route path="/catalogo/categoria/panaderia-pasteleria" component={ PanaderiaYPasteleria } />

              <Route path="/catalogo/categoria/desayuno-dulces" component={ DesayunosYDulces } />

              <Route path="/catalogo/categoria/colaciones" component={ Colaciones } />

              <Route path="/catalogo/categoria/despensa" component={ Despensa } />

              <Route path="/catalogo/categoria/bebidas-licores" component={ BebidasYLicores } />

              <Route path="/catalogo/categoria/mascotas" component={ Mascotas } />

              <Route path="/catalogo/categoria/mundo-bebe" component={ MundoBebe } />

              <Route path="/catalogo/categoria/limpieza-aseo" component={ LimpiezaYAseo } />

              <Route path="/catalogo/categoria/perfumeria-salud" component={ PerfumeYSalud } />

              <Route exact path="/catalogo/categoria/hogar" component={ Hogar } />

              <Route exact path="/catalogo/categoria" component={ Todos } />


              <Route exact path="/catalogo/producto/:productoId" component={ ProductoFullScreen } />

              <Redirect to="/catalogo/categoria" />

            </Switch>

          </div>

      </Router>

    );

};
    