import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./componentes/routers/AppRouters";
import { store } from "./store/store";

export const WalmartApp = () => {

    return (
        <>

            <Provider store={ store }>

                <AppRouter />

            </Provider>

        </>
    );

};