const min = require('../src/min');

describe('Min', () => {

    it('min([]) should be undefined', () => {
        expect(min([])).toEqual(undefined);
    });

    it('min([1]) should be 1', () => {
        expect(min([1])).toEqual(1);
    });

    it('min([1,2,3,4]) should be 4', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });
    
    it('min([-1,-2,-3,-4]) should be-14', () => {
        expect(min([-1,-2,-3,-4])).toEqual(-4);
    });


})