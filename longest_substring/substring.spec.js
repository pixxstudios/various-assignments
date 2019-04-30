const getSubstring = require('./substring.js');

describe("longest substring", () => {
    it("should return longest substring", () => {
        expect(getSubstring("ABCDE", "AABCE")).toBeEqual("ABC");
    })
});