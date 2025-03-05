// Variables to keep track of the car and doors
let carDoor;
let selectedDoor;
let revealedGoatDoor;

// Start the game
function initGame() {
    // Randomly place the car behind one of the 3 doors
    carDoor = Math.floor(Math.random() * 3) + 1;
}

// Choose a door
function selectDoor(door) {
    selectedDoor = door;
    revealGoat();
}

// Show a door with a goat behind it
function revealGoat() {
    do {
        // Randomly pick a door to reveal
        revealedGoatDoor = Math.floor(Math.random() * 3) + 1;
    } while (revealedGoatDoor === carDoor || revealedGoatDoor === selectedDoor); 
    
    // Show the goat behind the revealed door
    document.getElementById('door' + revealedGoatDoor).innerText = "Goat";
    // Ask if the player wants to switch their choice
    document.getElementById('result').innerText = "Do you want to switch your choice?";
    // Show the switch and stay buttons
    document.getElementById('switchButton').style.display = 'inline';
    document.getElementById('stayButton').style.display = 'inline';
}

// Switch to the other door
function switchDoor() {
    selectedDoor = [1, 2, 3].find(door => door !== selectedDoor && door !== revealedGoatDoor);
    revealResult();
}

// Stay with the current door
function stayDoor() {
    revealResult();
}

// Show the result of the game
function revealResult() {
    // Hide the switch and stay buttons
    document.getElementById('switchButton').style.display = 'none';
    document.getElementById('stayButton').style.display = 'none';
    // Check if the player won the car or got a goat
    if (selectedDoor === carDoor) {
        document.getElementById('result').innerText = "Congratulations! You won the car! Switching would have made you lose.";
    } else {
        document.getElementById('result').innerText = "Sorry, you got a goat. Switching would have made you win.";
    }
}

// Start the game when the page loads
initGame();
