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
    //find substring
    var len = S1.slice().length > S2.slice().length ? S1.slice().length : S2.slice().length;
    var i = 0;
    console.log(len);
    while (i < len && S1.slice()[i] == S2.slice()[i]) {
        i++;
        console.log(S1.slice(), S2.slice());
    }
    console.log(S2.substr(0, i));
    /*let substr = '';
    for(let i=0 ; i<S1.length; i++) {
        for(let j=0; j<S2.length; j++) {
            if(S1[i] != S2[j]) break;
            substr += S1[i];

            console.log(S1[i], S2[j], substr);
        }
    } */
    //return substr;
};
exports.getSubstring = getSubstring;
getSubstring('ABCDE', 'AABCFYTR');
