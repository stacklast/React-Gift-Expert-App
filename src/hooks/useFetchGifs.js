import { useEffect, useState } from "react"
import { getGifts } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {  

        getGifts( category )
            .then( imgs => {

                setTimeout( ()=> {
                    
                    //console.log(imgs);

                    setState({
                        data:imgs,
                        loading: false
                    });
                }, 3000);

            });

    }, [ category ]);

    

    return state;
}
