var time = [[0, 0], [5, 9], [5, 5]]

function stringifyTime() {
    let string_time = [];

    for (const i of time) {
        string_time.push(i[0].toString().concat(i[1].toString()));
    }

    string_time = string_time.join(":");

    return string_time;
}

function updateClock() {
    let clock = document.getElementById("clock");

    if (time[2][1] !== 9) {  // Seconds
        time[2][1]++;
    } else {
        time[2][1] = 0;
        time[2][0]++;
    } 
    
    if (time[2][0] === 6) {  // Minutes
        time[2][0] = 0;
        time[1][1]++;
    } if (time[1][1] === 10) {
        time[1][1] = 0;
        time[1][0]++;
    }
    
    if (time[1][0] === 6) {  // Hours
        time[1][0] = 0;
        time[0][1]++;
    } if (time[0][1] === 10) {
        time[0][1] = 0;
        time[0][0]++;
    }

    clock.innerHTML = stringifyTime();
}

setInterval(updateClock, 1000);