const map = require('../src/map');

const cube = (n) => {
    return n**3;
}

const identity = (arr) => {
    return arr;
}

describe('Map', () => {

    describe('Map of Cube', () => {
        
        it('Map of [], cube is []', () => {
            expect(map([], cube)).toEqual([]);
        });
        
        it('Map of [1,2,3], cube is [1,8,27]', () => {});
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
        
        it('Map of [3], cube is [27]', () => {});
        expect(map([3], cube)).toEqual([27]);
        
    })

    describe('Map of identity', () => {

        it('Map of [], identity is []', () => {
            expect(map([], identity)).toEqual([]);
        });
    
        it('Map of [1,2,3], identity is [1,2,3]', () => {});
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
        
        it('Map of [3], identity is [3]', () => {});
        expect(map([3], identity)).toEqual([3]);

    })

    
})