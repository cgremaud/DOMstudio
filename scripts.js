// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", (event) => {
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    let flightStatus = document.getElementById("flightStatus")
    let takeoffButton = document.getElementById("takeoff")
    let landButton = document.getElementById("landing")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let rocket = document.getElementById("rocket")
    rocket.style.bottom = "0px"
    rocket.style.left = "0px"
    rocket.style.position = "absolute"
    let upButton = document.getElementById("upButton")
    let downButton = document.getElementById("downButton")
    let leftButton = document.getElementById("leftButton")
    let rightButton = document.getElementById("rightButton")

    function addTen(num){
        return num + 10
    }

    function minusTen(num){
        return num - 10
    }

    upButton.addEventListener("click", () => {
        let movement = parseInt(rocket.style.bottom) + 10 + "px"
        rocket.style.bottom = movement
        // rocket.style.position= 'relative'; 
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
    })

    downButton.addEventListener("click", () => {
        let movement = parseInt(rocket.style.bottom) - 10 + "px"
        rocket.style.bottom = movement
    })

    leftButton.addEventListener("click", () => {
        let movement = parseInt(rocket.style.left) -10 +"px"
        rocket.style.left = movement
    })

    rightButton.addEventListener("click", () => {
        let movement = parseInt(rocket.style.left) + 10 + "px"
        rocket.style.left = movement
    })

    takeoffButton.addEventListener("click", () => {
        let confirm = window.confirm("Is the shuttle ready for liftoff?")
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight!"
            shuttleBackground.style.backgroundColor = "blue"
            spaceShuttleHeight.innerHTML += 10000
        }
    })

    landButton.addEventListener("click", () => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
    })
})