let count = 0;
function Counter(){
    console.log(count);
    count++;

    setTimeout(Counter,1000);
}

Counter();

