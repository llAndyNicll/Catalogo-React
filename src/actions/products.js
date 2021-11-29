import { db } from "../firebase/firebase-confi";
import { fileUpload } from "../helpers/fileUpload";
import { loadProducts } from "../helpers/loadProducts";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startNewProduct = () => {

    return async( dispatch ) => {

        const productNew = {

            nombre: '',
            cantidad: '',
            descripcion: '',
            marca: '',
            caracteristicas: '',
            precio1: '',
            precio2: '',
            tipo: '',
            search: ''

        };

        const docRef = await db.collection( 'catalogo/categoria/productos' ).add( productNew );

        dispatch( activeProduct( docRef.id, productNew ) );

        dispatch( addNewProduct( docRef.id, productNew ) );

    };

};

export const activeProduct = ( id, product ) => ({

    type: types.productoActive,
    payload: {
        id,
        ...product
    }

});

const addNewProduct = ( id, product ) => ({

    type: types.productoAddNew,
    payload: {
        id,
        ...product
    }

});

export const startSaveProduct = ( product ) => {

    return async( dispatch ) => {

        if ( !product.url ) {

            delete product.url;

        };

        const productFirestore = { ...product };
            delete productFirestore.id;
        
        await db.doc( `catalogo/categoria/productos/${ product.id }` ).update( productFirestore );

        dispatch( refreshProduct( product.id, productFirestore ) );

        dispatch( startLoadingProducts() );

        Swal.fire( 'Guardado', product.nombre, 'success' );

    };

};

const refreshProduct = ( id, products ) => ({

    type: types.productoRefresh,
    payload: {

        id,
        products: {

            id,
            ...products

        }

    }

});

export const startLoadingProducts = () => {

    return async( dispatch ) => {

        const products = await loadProducts();

        dispatch( setProduct( products ) );

    };

};

const setProduct = ( products ) => ({

    type: types.productLoad,
    payload: products

});

export const resetProductActive = () => ({

    type: types.productoActiveReset,

});

export const startUploading = ( file ) => {

    return async( dispatch, getState ) => {

        const { active: activeProduct } = getState().product;

        Swal.fire({

            title: 'Subiendo...',
            text: 'Espere por favor...',
            allowOutsideClick: false,
            didOpen: () => {

                Swal.showLoading();

            }

        });

        const fileUrl = await fileUpload( file );

            activeProduct.url = fileUrl;

        dispatch( startSaveProduct( activeProduct ) );

        Swal.close();

    };

};

export const startDeleteProduct = ( id ) => {

    return async( dispatch ) => {

        await db.doc( `catalogo/categoria/productos/${ id }` ).delete();

        dispatch( deleteProduct( id ) );

    };

};

const deleteProduct = ( id ) => ({

    type: types.productDelete,
    payload: id

});