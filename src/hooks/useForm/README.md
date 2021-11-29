# useForm Hook

Ejemplo de uso: 

...

    const initialForm = {

        name: '',
        age: 0,
        email: ''

    };

    const [ inputValue, handleInputChange, reset ] = useForm( initialForm );

    //*** useForm() // recibe un valor por defecto ***//

...