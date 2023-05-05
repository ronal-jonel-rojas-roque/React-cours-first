import { useState } from 'react';

export const AddCategory =({onNewCategory}) => {

    const [inputValue, setInputValue] =useState('');

    const OnInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <=1) return; //Limita el ingreso al input a dos caracateres como minimo
        //InAddCategory(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue(''); //elimina lo almacenado en el input
    }
    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifts" 
                value={ inputValue }
                onChange={OnInputChange}
            />

        </form>
        
    )     
}