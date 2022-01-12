
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


function GifExpertApp(){

    const arreglo = ['Tsubasa'];
    const [Categories, setCategories] = useState (arreglo);

    // const handleAdd = () =>{
    //     setCategories(categ =>[...categ, 'Pokemón']);
    // }
    
    return(
        <>
            <h2>GifExpertApp</h2>
                <AddCategory setCategories = {setCategories} />
            <hr/>
            <ol>
                {
                    Categories.map(category => (
                        <GifGrid 
                        key={category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </>
   
    )
}

export default GifExpertApp;