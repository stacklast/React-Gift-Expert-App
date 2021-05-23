import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch'] );

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Hunter X Hunter'] );
    //     setCategories( cat => [...categories, 'Hunter X Hunter'] );
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory  setCategories={ setCategories } />
            <hr/>
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        category={ category }
                        key={ category }
                         />
                    ) )
                }
            </ol>
        </>
    )
}