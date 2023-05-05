import { useEffect, useState } from "react";

import { GifItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
//import { getGifs } from "../helpers/GetGifs";


export const GiftGrid =({category}) => { 

    const {images, isLoading } = useFetchGifts(category);

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
        
    )     
}