// For given two sustrings S1 and S2, find the longest substring common in both the strings

const getSubstring = (S1: string, S2: string): string => {
    // check for empty values
    if(S1 == "" || S2 == "") return "";

    // check if both strings are same
    if(S1 === S2) return S1;

    //find substring
    let substr = '';
    for(let i=0 ; i<S1.length; i++) {
        for(let j=0; j<S2.length; j++) {
            if(S1[i] != S2[j]) break;
            substr += S1[i];

            console.log(S1[i], S2[j], substr);
        }
    }
    return substr;
}

export { getSubstring };

getSubstring('ABCDE', 'AABCF');