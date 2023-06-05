import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    /*
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
     })
     */
    test('h2 debe de tener el valor por defecto "Counter"', () => { 
        const wrapper = shallowMount( Counter )
        expect ( wrapper.find('h2').exists() ).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        //console.log(h2);
        expect ( h2Value ).toBe('Counter')
        
     })
})