import { db } from "../firebase/firebase-confi";

export const loadProducts = async() => {

    const productsSnap = await db.collection( 'catalogo/categoria/productos' ).get();

    const products = [];

    productsSnap.forEach( snapHijo => {

        products.push({

            id: snapHijo.id,
            ...snapHijo.data()

        });        

    });

    return products

};