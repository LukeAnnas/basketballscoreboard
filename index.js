let homeEl = document.getElementById("home-score")
let homeScore = 0

function homeOne(){
    homeScore += 1
    homeEl.textContent = homeScore
}
function homeTwo(){
    homeScore += 2
    homeEl.textContent = homeScore
}
function homeThree(){
    homeScore += 3
    homeEl.textContent = homeScore
}

let guestEl = document.getElementById("guest-score")
let guestScore = 0

function guesOne(){
    guestScore += 1
    guestEl.textContent = guestScore
}
function guestTwo(){
    guestScore += 2
    guestEl.textContent = guestScore
}
function guestThree(){
   guestScore += 3
    guestEl.textContent = guestScore
}

function newGame(){
   guestScore = 0
   homeScore = 0 
   guestEl.textContent = 0
   homeEl.textContent = 0
}