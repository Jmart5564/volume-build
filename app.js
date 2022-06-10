
// state
let volume = 10;



// component
    // define and grab DOM elements
    // display functions
function changeVolume(input) {

    if (input === 'up') {
        volume++;
    }
    if (input === 'down') {
        volume--;
    }
    displayVolume();
}

    // subscribe to events

const downButton = document.getElementById('volume-down');
downButton.addEventListener('click', () => {
    changeVolume('down');
});


const upButton = document.getElementById('volume-up');
upButton.addEventListener('click', () => {
    changeVolume('up');
});

        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components
const volumeDisplay = document.getElementById('volume');

function displayVolume() {
    volumeDisplay.textContent = volume;
}

// page load actions
displayVolume();