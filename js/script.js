"use strict";


let clock = document.querySelector('#clock');




setInterval(function() {
        let date = new Date();
        let hrs = addZero(date.getHours());
        let min = addZero(date.getMinutes());
        let sec = addZero(date.getSeconds());
        let todo = hrs+':'+min+':'+sec;
        clock.textContent = todo;
})

function addZero(num) {
    if(num<=9) {
        return '0'+ num;
    } else {
        return num;
    }
}