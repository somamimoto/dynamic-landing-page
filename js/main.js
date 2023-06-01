// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    userName = document.getElementById('userName'),
    focusOn = document.getElementById('focusOn');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    // let today = new Date(2023, 06, 01, 07, 30, 30),
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    // getHours() -> 0 to 23
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hour format
    // hour = hour % 12 || 12;

    // Output
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    // let today = new Date(2023, 06, 01, 13, 30, 30),
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('../img/daytime.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else{
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('userName') === null) {
        userName.textContent = '[Enter Name]';
    }else{
        userName.textContent = localStorage.getItem('userName');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        // Every key has an unique indentifier. Enter's UID is 13.
        // Some brawser does not support e.which
        // ref: Mozilla -> Both .which and .keyCode are not recommended.
        // Instead of them, plz consider using .key
        // if(e.which == 13 || e.keyCode == 13) {
        if(e.key == 'Enter') {
            localStorage.setItem('userName', e.target.innerText);
            userName.blur();
        }
    }else{
        localStorage.setItem('userName', e.target.innerText);
    }
}


// Get Focus
function getFocus() {
    if(localStorage.getItem('focusOn') === null) {
        focusOn.textContent = '[Enter Focus]';
    }else{
        focusOn.textContent = localStorage.getItem('focusOn');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        // Every key has an unique indentifier. Enter's UID is 13.
        // Some brawser does not support e.which
        // ref: Mozilla -> Both .which and .keyCode are not recommended.
        // Instead of them, plz consider using .key
        // if(e.which == 13 || e.keyCode == 13) {
        if(e.key == 'Enter') {
            localStorage.setItem('focusOn', e.target.innerText);
            focusOn.blur();
        }
    }else{
        localStorage.setItem('focusOn', e.target.innerText);
    }
}


userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
focusOn.addEventListener('keypress', setFocus);
userName.addEventListener('blur', setFocus);


// Run
showTime();
setBgGreet();
getName();
getFocus();
