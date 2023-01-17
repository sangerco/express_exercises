const { getMean, getMedian, getMode } = require('./functions');

describe("mean function", () => {

    test('return a num', () => {
        let mean = getMean([1,2,3]);
        expect.any(Number);
    })

    test('return accurate mean', () => {
        let mean = getMean([1,2,3,4,5,6,7]);
        expect(mean).toEqual(4);
    })

    test('return accurate mean with negative numbers', () => {
        let mean = getMean([-1,-2,-3,-4,-5,-6, -7]);
        expect(mean).toEqual(-4);
    })
})

describe("median function", () => {

    test('return a num', () => {
        let median = getMedian([1,2,3]);
        expect.any(Number);
    })

    test('return accurate median with odd array', () => {
        let median = getMedian([1,2,3,4,5]);
        expect(median).toEqual(3);
    })

    test('return accurate median with even array', () => {
        let median = getMedian([1,2,3,4,5,6]);
        expect(median).toEqual(3.5);
    })
})

describe("mode function", () => {

    test('return a num', () => {
        let mode = getMode([1,2,3]);
        expect.any(Number);
    })

    test('return accurate mode with one num being most common', () => {
        let mode = getMode([1,1,2,3,4,5]);
        expect(mode).toEqual(1);
    })

    test('return accurate mode with multiple nums being most common', () => {
        let mode = getMode([1,2,3,3,4,4,5,5,6]);
        expect(mode).toEqual(3);
    })
})