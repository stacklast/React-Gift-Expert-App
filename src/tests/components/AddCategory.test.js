import * as React from 'react';
import { shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Prueba en <AddCategory />>', () => {

    const setCategories = jest.fn();
    let wrapper =  shallow(<AddCategory setCategories={ setCategories } />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper =  shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe cambiar la caja de texto', () => {

       const input = wrapper.find('input');
       const value = 'Hola Mundo';
       input.simulate( 'change', { target:{ value: value } } );
       expect( wrapper.find('p').text().trim() ).toBe( value ); 
    
    });
    
    test('No debe postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
   });
    

});