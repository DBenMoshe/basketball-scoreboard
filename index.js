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

function homeThree() {
    hPoints += 3
    homePoints.textContent = hPoints
}

function guestOne() {
    gPoints++
    guestPoints.textContent = gPoints
}

function guestTwo() {
    gPoints += 2
    guestPoints.textContent = gPoints
}

function guestThree() {
    gPoints += 3
    guestPoints.textContent = gPoints
}

