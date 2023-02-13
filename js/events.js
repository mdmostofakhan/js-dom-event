console.log('This is separate js file')
// option 4: directly set on the HTML element
//  <button onclick="console.log(65)">Anather Click</button>

// optiion 2: add onclick function onthe HTML Elements
// Important: we will use this--------------------
// <button onclick="makeRed()">make red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 3: add onclick function
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makepurple() {
    document.body.style.backgroundColor = 'purple'
} 

// option 4: add onclick function

const pinkButton = document.getElementById('make-pink')
        pinkButton.addEventListener('click', makePink);

        function makePink() {
            document.body.style.backgroundColor = 'pink'
}
        // Option: 4 a
const greenButton = document.getElementById('make-green')

greenButton.addEventListener('click', function makegreen() {
    document.body.style.backgroundColor = 'green'
})

// Option: 4 final 
// IMPORTANT: we will use this sometime
//     <button id="make-goldenrod">Make goldenrod</button> 
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})



function makeBlack() {
    document.body.style.backgroundColor = 'black'
}

document.getElementById('make-tomato').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})