/* eslint-disable no-unused-expressions */
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import 'animate.css';

function GifGrid ({category}){

    //El use efect sirve para solo ejecutar una vez el getGifs y no hacer peticiones
    //Http cada vez que haya un cambio y se renderice en el navegador

    const {data:images, loading} = useFetchGifs (category);

    return(
        <>
            <h3 className="titulo">{category}</h3>
            
            {loading && <p>Loading...</p>}

            <div className='car-grid'>
                
            {
                images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            { ...img }
                        />
                ))
            }
            </div>
        </>
        
    );
}

export default GifGrid;