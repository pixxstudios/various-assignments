const { getSubstring } = require('./substring.js');

describe("longest substring", () => {
    it("check for same strings", () => {
        expect(getSubstring("ABCD", "ABCD")).toEqual("ABCD");
    });

    it("check if empty string is passed strings", () => {
        expect(getSubstring("", "ABCD")).toEqual("");
        expect(getSubstring("ABCD", "")).toEqual("");
    });

    /* it("should return longest substring", () => {
        expect(getSubstring("ABCDE", "AABCE")).toEqual("ABC");
    }) */
});