import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem }  from './GifGridItem'

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs();
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p>loading</p> }
            <div className="card-grid">

                    {
                        images.map( img => (
                            <GifGridItem
                            key={ img.id } 
                            { ...img }
                            />
                        ))
                    }
            
            </div>
        </>
    )
}
