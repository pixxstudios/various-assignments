// For given two sustrings S1 and S2, find the longest substring common in both the strings

const getSubstring = (S1: string, S2: string): string => {
    // check for empty values
    if(S1 == "" || S2 == "") return "";

    // check if both strings are same
    if(S1 === S2) return S1;
}

export { getSubstring };

getSubstring('ABCDE', 'AABCF');