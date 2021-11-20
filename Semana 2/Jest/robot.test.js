const createRobot = require('./robot')

describe('Create robot', ()=> {
    test('Posición inicial', ()=> {
        //expect(createRobot()).toEqual({})
        //expect(createRobot(0, 0).getPosition()).toEqual("0,0")
        expect(createRobot(0, 10).moveUp()).toEqual('posición fuera de límites')
        expect(createRobot(0, 9).moveUp()).toEqual(10)
    });
    test('Posición moveup', ()=> {
        expect(createRobot(0, 0).moveUp()).toEqual(1)
        expect(createRobot(0, 10).moveUp()).toEqual('posición fuera de límites')
        expect(createRobot(0, 9).moveUp()).toEqual(10)
    })
    test('Posición movedown', ()=> {
        expect(createRobot(0, 9).moveDown()).toEqual(8)
        expect(createRobot(0, 0).moveDown()).toEqual('posición fuera de límites')
    })
    test('Posición moveright', ()=> {
        expect(createRobot(0, 0).moveRight()).toEqual(1)
        expect(createRobot(10, 0).moveRight()).toEqual('posición fuera de límites')
        expect(createRobot(9, 0).moveRight()).toEqual(10)
    })
    test('Posición moveleft', ()=> {
        expect(createRobot(0, 0).moveLeft()).toEqual('posición fuera de límites')
        expect(createRobot(4, 0).moveLeft()).toEqual(3)
    })
})