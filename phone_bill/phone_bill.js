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
    var callsData = {};
    var totalCost = 0;
    var maxDuration = 0;
    var minValueNumber = 999999999;
    S.split('\n').forEach(function (n) {
        var number = Number(n.split(',')[1].split('-').join(''));
        var duration = n.split(',')[0];
        var sec = getSeconds(duration);
        if (callsData[number])
            callsData[number] += sec;
        else
            callsData[number] = sec;
        if (callsData[number] > maxDuration) {
            maxDuration = callsData[number];
        }
    });
    // calculate the longest duration
    for (var key in callsData) {
        if (callsData[key] === maxDuration) {
            if (Number(key) < minValueNumber) {
                minValueNumber = Number(key);
            }
        }
    }
    for (var key in callsData) {
        if (Number(key) !== minValueNumber) {
            if (callsData[key] < 300) {
                totalCost += callsData[key] * 3;
            }
            else {
                totalCost += 150 * Math.ceil(callsData[key] / 60);
            }
        }
    }
    console.log('totalCost ', totalCost);
}
function getSeconds(d) {
    return Number(d.split(':')[0]) * 60 * 60 + Number(d.split(':')[1]) * 60 + Number(d.split(':')[2]);
}
exports.getSeconds = getSeconds;
var S = "00:01:00,400-234-090\n00:05:00,701-080-080\n00:05:00,400-234-090\n00:01:00,701-080-080";
solution(S);
