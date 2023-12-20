/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function sum(n){
    let count = 1;
    for(let i = 1; i <= n; i++){
        count++;
    }
    return count;
}

function calculateTime(n) {
    let d = new Date();
    let s = d.getHours()*60*60;
    s += d.getMinutes()*60;
    s += d.getSeconds();
    s = s*1000 + d.getMilliseconds();
    console.log(s/1000);
    sum(n);
    let currd = new Date();
    let currs = currd.getHours()*60*60;
    currs += currd.getMinutes()*60;
    currs += currd.getSeconds();
    currs = currs*1000 + currd.getMilliseconds();
    console.log(currs/1000);
    console.log((currs - s)/1000);

    return currs - s;
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);