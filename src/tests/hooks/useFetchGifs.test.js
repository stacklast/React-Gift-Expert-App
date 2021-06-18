import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
jest.setTimeout(10000);
describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } =  result.current;
        await waitForNextUpdate( {timeout:4000} );
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        
    });
    
    test('Debe retornar un arreglo de img y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate( {timeout:4000} );
        const { data, loading } =  result.current;
       
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    

});
