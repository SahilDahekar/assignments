
function update(){
    const date = new Date();
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    console.log(`HH : ${hours12} , MM : ${date.getMinutes()} , SS : ${date.getSeconds()} ${ampm}`);
}

setInterval(update, 1000);