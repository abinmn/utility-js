const max = require('../src/max');

describe('Max', () => {

    it('max([]) should be undefined', () => {
        expect(max([])).toEqual(undefined);
    });

    it('max([1]) should be 1', () => {
        expect(max([1])).toEqual(1);
    });

    it('max([1,2,3,4]) should be 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });
    
    it('max([-1,-2,-3,-4]) should be-14', () => {
        expect(max([-1,-2,-3,-4])).toEqual(-1);
    });


})