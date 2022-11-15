let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let hPoints = 0
let gPoints = 0

function homeOne() {
    hPoints++
    homePoints.textContent = hPoints
}

window.homeOne = homeOne

function homeTwo() {
    hPoints += 2
    homePoints.textContent = hPoints
}

window.homeTwo = homeTwo

function homeThree() {
    hPoints += 3
    homePoints.textContent = hPoints
}

window.homeThree = homeThree

function guestOne() {
    gPoints++
    guestPoints.textContent = gPoints
}

window.guestOne = guestOne

function guestTwo() {
    gPoints += 2
    guestPoints.textContent = gPoints
}

window.guestTwo = guestTwo

function guestThree() {
    gPoints += 3
    guestPoints.textContent = gPoints
}

window.guestThree = guestThree