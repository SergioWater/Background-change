let currentColorIndex = 0;
const colorsAndGradients = [
    '#E0115F',
    'pink',
    '#C3B1E1'
   
];

function changeBackground() {
    document.body.style.background = colorsAndGradients[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colorsAndGradients.length;
}

setInterval(changeBackground, 4500); // Change background every 5000 milliseconds (5 seconds)

// 'linear-gradient(to right, red, yellow)',
// 'linear-gradient(to right, blue, white)'
//'blue',
//  'lightblue',