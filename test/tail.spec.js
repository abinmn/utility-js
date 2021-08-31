const tail = require('../src/tail');

describe('Tail', () => {

    it('Return null for empty array', () => {
        expect(tail([])).toEqual(null);
    });

    it('Return 3 for array [1,2,3]', () => {
        expect(tail([1, 2, 3])).toEqual(3);
    });

    it('Return 1 for array [1]', () => {
        expect(tail([1])).toEqual(1);
    });
});