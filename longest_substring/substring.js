"use strict";
// For given two sustrings S1 and S2, find the longest substring common in both the strings
exports.__esModule = true;
var getSubstring = function (S1, S2) {
    // check for empty values
    if (S1 == "" || S2 == "")
        return "";
    // check if both strings are same
    if (S1 === S2)
        return S1;
};
exports.getSubstring = getSubstring;
getSubstring('ABCDE', 'AABCF');
