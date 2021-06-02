import * as React from 'react';
import { shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba en <GifGrid />', () => {
    const category = 'Batman';
    

    test('debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper =  shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe mostrar imagenes cuando se carga useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/image.png',
                title: 'cual quier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/image.png',
                title: 'cual quier cosa'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper =  shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    

});
