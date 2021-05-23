import * as React from 'react';
import { shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost:algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

    test('should show the component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have a pharagraph with text', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);

    });

    test('should have img equal to the url of props', () => {
        
        const img = wrapper.find('img');
        // console.log( img.props().src ); 
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('should have animate__fadeIn className', () => {
       
        const div = wrapper.find('div');
        //animate__fadeIn
        //console.log(div.prop('className'));
        const className = div.prop('className');
        // expect( className ).toContain('animate__fadeIn');
        expect( className.includes('animate__fadeIn') ).toBe(true);
    });
    
    
    
    
});