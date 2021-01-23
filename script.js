// Setting up Light & Dark Themes
var toggle_button = document.getElementById("theme-change");

toggle_button.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        toggle_button.src = "assets/moon-light.png";
    } else {
        toggle_button.src = "assets/moon-dark.png";
    }
});

// Actual Timer
var time = [[0, 0], [0, 0], [0, 0]]

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

// Updating the below timers
function updateSecondaryTimers() {
    let stopwatch_time = {
        hours: Number(time[0][0].toString().concat(time[0][1].toString())),
        minutes: Number(time[1][0].toString().concat(time[1][1].toString())),
        seconds: Number(time[2][0].toString().concat(time[2][1].toString())),
    };

    let total_seconds = stopwatch_time["seconds"] + (stopwatch_time["minutes"] * 60) + (stopwatch_time["hours"] * 3600);

    console.log(total_seconds);

    for (const i of document.getElementsByTagName("span")) {
        if (i.id === "span-days") {
            i.innerHTML = total_seconds / 86400;
        } else if (i.id === "span-weeks") {
            i.innerHTML = total_seconds / (86400 * 7);
        } else if(i.id === "span-months") {
            i.innerHTML = total_seconds / (86400 * 7 * 31);
        } else {
            i.innerHTML = total_seconds / (86400 * 7 * 31 * 12);
        }

    }
}

setInterval(updateClock, 1000);
setInterval(updateSecondaryTimers, 1000);
