import React from 'react';
import { shallow } from "enzyme";
import { GiftExpertApp } from "../GiftExpertApp";

describe('Pruebas en GiftExpertApp', () => {
   
    test('Debe mostrarte correctamente', () => {
        
        const wrapper = shallow(<GiftExpertApp/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={ categories } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
});
