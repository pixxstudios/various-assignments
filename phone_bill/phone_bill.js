"use strict";
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
exports.__esModule = true;
function solution(S) {
    // get the phone numbers
    var numbers = [];
    var duration = [];
    var callsData = [];
    var totalCostData = {};
    var totalCost = 0;
    var maxDuration = 0;
    var maxDurationNumber = undefined;
    var billToReduce = 0;
    var tiePhoneNumbers = [];
    S.split('\n').forEach(function (n) {
        numbers.push(n.split(',')[1]);
        duration.push(n.split(',')[0]);
    });
    // calculate the longest duration
    // let maxDurationNumber = numbers[0].sec;
    duration.forEach(function (d, i) {
        var sec = 0;
        sec = getSeconds(d);
        if (sec < 300) {
            totalCost += sec * 3;
        }
        else {
            totalCost += 150 * Math.ceil(sec / 60);
        }
        callsData.push({ "number": numbers[i], "duration": Number(sec) });
        if (totalCostData.hasOwnProperty(numbers[i]))
            totalCostData[numbers[i]] += Number(sec);
        else
            totalCostData[numbers[i]] = Number(sec);
        // check for max duration
        if (totalCostData[numbers[i]] > maxDuration) {
            maxDuration = callsData[numbers[i]];
            maxDurationNumber = numbers[i];
        }
    });
    callsData.forEach(function (callData) {
        if (callData.number === maxDurationNumber) {
            if (callData.duration < 300) {
                billToReduce += callData.duration * 3;
            }
            else {
                billToReduce += Math.ceil(callData.duration / 60) * 150;
            }
        }
    });
    totalCost -= billToReduce;
    console.log('totalCost ', totalCost);
}
function getSeconds(d) {
    return Number(d.split(':')[0]) * 60 * 60 + Number(d.split(':')[1]) * 60 + Number(d.split(':')[2]);
}
exports.getSeconds = getSeconds;
exports["default"] = {};
var S = "00:01:00,400-234-090\n00:05:00,701-080-080\n00:05:00,400-234-090\n00:01:00,701-080-080";
solution(S);
