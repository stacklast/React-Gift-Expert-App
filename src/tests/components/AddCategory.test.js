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
    
    test('Debe llamar el setCategories y limpiar el inputValue', () => {
        const value = 'Hola Mundo';
        // 1. simular el inputChange
        const input = wrapper.find('input');
        input.simulate( 'change', { target:{ value: value } } );
        // 2. simular el envio del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. se debe llamar el setCategories una vez
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); //llamado 2 veces
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // espera que se haya llamado con una funcion
        // 4. el valor del input debe estar como string vacio
        expect( wrapper.find('input').prop('value') ).toBe( '' );
                
    });

    

});