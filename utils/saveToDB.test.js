const { createParams } = require('./saveToDB');

describe("createParams()", () => {
    it('should return an object', () => {
        expect(typeof createParams('param')).toBe("object");
    })  
})