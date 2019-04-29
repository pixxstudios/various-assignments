/*
-- Description --

Input will be a multiline string in the following format 00:05:00,400-234-090.
Each line will have duration of call and the phone number.
We need to calculate the phone bill given the following conditions.

1. If duration is less than 5min then charges are 3 cents per second
2. If duration is equal or more than 5 min then charges are 150 cents per minute
3. Longest duration call is free
4. If longest duration is tie between two or more phone numbers
    then phone number with smallest num value will be free
*/

// NOTE: validation step 4 is missing from the code for now //

interface CallsData {
    number: string,
    duration: number
}

function solution(S: String): void {
    // get the phone numbers
    const numbers: Array<string> = [];
    const duration: Array<string> = [];
    const callsData: Array<CallsData> = [];
    const totalCostData: object = {};

    let totalCost: number = 0;
    let maxDuration: number = 0;
    let maxDurationNumber: string = undefined;
    let billToReduce: number = 0;
    let tiePhoneNumbers: Array<number> = [];

    S.split('\n').forEach((n: string) => {
        numbers.push(n.split(',')[1].split('-').join(''));
        duration.push(n.split(',')[0]);
    });

    // calculate the longest duration
    duration.forEach((d: string, i: number) => {
        let sec: number = 0;
        sec = getSeconds(d);
        if(sec < 300 ) {
            totalCost += sec * 3; 
        } else {
            totalCost += 150 * Math.ceil(sec/60);
        }

        callsData.push({ "number" : numbers[i], "duration": Number(sec)});
        if(totalCostData.hasOwnProperty(numbers[i]))
            totalCostData[numbers[i]] += Number(sec);
        else 
            totalCostData[numbers[i]] = Number(sec);

        // check for max duration
        if(totalCostData[numbers[i]] > maxDuration) {
           maxDuration = totalCostData[numbers[i]];
           maxDurationNumber = numbers[i];
           console.log(' -=>>> ',totalCostData[numbers[i]]);
        }
    })

    callsData.forEach((callData: CallsData) => {
        if(callData.number === maxDurationNumber) {
            if(callData.duration < 300) {
                billToReduce += callData.duration * 3;
            } else {
                billToReduce += Math.ceil(callData.duration/60) * 150;
            }
        }
    })
    
    totalCost -= billToReduce;
    let tempCallsData = [];
    for(let i in totalCostData) {
        if(totalCostData[i] === maxDuration)
            tempCallsData.push({ number: i, duration: totalCostData[i]});
    }
    let smallestNumber = tempCallsData[0].number;
    for(let i in totalCostData) {
        if(totalCostData[i].number > smallestNumber)
            smallestNumber = totalCostData[i].number;
    }
    console.log('totalCost ', totalCost);
 }

function getSeconds(d: string): number {
    return Number(d.split(':')[0]) * 60 * 60 + Number(d.split(':')[1]) * 60 + Number(d.split(':')[2]);
}

export {
    getSeconds
};

const S: string =`00:01:00,400-234-090
00:05:00,701-080-080
00:05:00,400-234-090
00:01:00,701-080-080`;

solution(S);