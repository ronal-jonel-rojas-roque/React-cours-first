import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpert =( ) => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return(
        <>  
            {/*titulo*/}
            <h1>GiftExpert</h1>

            {/*Input*/}
            <AddCategory 
                onNewCategory = {(value) => onAddCategory (value)}
            />
            {/*Listado de Gif*/}
                 {/*map permite barrer un arreglo nuevo*/}
                {
                    categories.map( (category) =>
                        (
                            <GiftGrid 
                            key={category} 
                            category={category}
                            />
                    )) 
                }
        </>
    )     
}