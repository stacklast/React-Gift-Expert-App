import * as React from 'react';
import { shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
describe('Prueba en <AddCategory />>', () => {

    const setCategories = () => {} 
    const wrapper =  shallow(<AddCategory setCategories={ setCategories } />);

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe cambiar la caja de texto ', () => {

       const input = wrapper.find('input');
       const value = 'Hola Mundo';
       input.simulate( 'change', { target:{ value: value } } );
       expect( wrapper.find('p').text().trim() ).toBe( value ); 
    
    });
    

});