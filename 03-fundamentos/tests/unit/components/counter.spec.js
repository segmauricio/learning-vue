import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })
    /*
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
     })
     */
    //Test 1
    test('h2 debe de tener el valor por defecto "Counter"', () => { 
        //const wrapper = shallowMount( Counter )
        expect ( wrapper.find('h2').exists() ).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        //console.log(h2);
        expect ( h2Value ).toBe('Counter')
    })
    //Test 2
    test('El valor por defecto debe ser 100 en el p', () => {
        //Wrapper
        //const wrapper = shallowMount( Counter )

        //p Tags
        //const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        //npm run test:unitconsole.log(pTags);

        //expect segundo p === 100
        //expect( pTags[1].text() ).toBe('100')
        expect ( value ).toBe('100')
    })
    test('Debe de incrementar y decrementar contador', async() => {
        //Increase button
        //const wrapper = shallowMount( Counter )
        //const increaseBtn = wrapper.find('button')
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        //Decrease button
        //const decreaseBtn = wrapper.findAll('button')[1]
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        //expect(value).toBe('99')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect (value).toBe('101')
    })
})