import React from "react";
import { CatalogoScreen } from "../navbar/componentes/CatalogoScreen";
import { ContactosScreen } from "../navbar/componentes/ContactosScreen";
import { InicioSecionScreen } from "../navbar/componentes/InicioSecionScreen";
import { OfertasScreen } from "../navbar/componentes/OfertasScreen";
import { RegistrarseScreen } from "../navbar/componentes/RegistrarseScreen";
import { SobreNosotrosScreen } from "../navbar/componentes/SobreNosotrosScreen";
import { Navbar } from "../navbar/Navbar";
import { WalmartScreen } from "../WalmartScreen";

import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { EditWeb } from "../navbar/componentes/EditWeb";

export const RaizRouter = () => {

    return (
        <>
        
            <Navbar />

            <Switch>

                <Route exact path="/catalogo" component={ CatalogoScreen } />

                <Route exact path="/ofertas" component={ OfertasScreen } />
                
                <Route exact path="/sobre-nosotros" component={ SobreNosotrosScreen } />

                <Route exact path="/contactos" component={ ContactosScreen } />

                <Route exact path="/inicio-secion" component={ InicioSecionScreen } />

                <Route exact path="/registro" component={ RegistrarseScreen } />

                <Route exact path="/edit-web" component={ EditWeb } />

                <Route exact path="/inicio" component={ WalmartScreen } />


                <Redirect to="/inicio" />

            </Switch>        

        </>
    );  

}