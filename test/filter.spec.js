const filter = require('../src/filter');

const filterUpperCase = (c) => {
    if (c == c.toUpperCase()) {
        return true;
    }

    return false;
}

describe('Filter', () => {

    it('Filter [] if x is true is []', () => {
        expect(filter([], x => true)).toEqual([]);
    });
    
    it('Filter [1,2,3] if x is true is [1,2,3]', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });
    
    it('Filter [1,2,3] if x is false is []', () => {
        expect(filter([1,2,3], x => false)).toEqual([]);
    });
    
    it('Filter [1,2,3] if x is odd is [1, 3]', () => {
        expect(filter([1,2,3], x => x % 2 != 0)).toEqual([1, 3]);
    });

    it('Filter [a, B, C, d] if x is uppercase is [B, C]', () => {
        expect(filter(['a', 'B', 'C', 'd'], filterUpperCase)).toEqual(['B', 'C']);
    });

})