const head = require('../src/head');

describe('Head', () => {

    it('Return null for empty array', () => {
        expect(head([])).toEqual(null);
    });

    it('Return first element when size greater than one', () => {
        expect(head([1, 2, 3])).toEqual(1);
    });

    it('Return first element when array has one element', () => {
        expect(head([5])).toEqual(5);
    });

    it('Return first element when array has string', () => {
        expect(head(['hello', 'world'])).toEqual('hello');
    });

});