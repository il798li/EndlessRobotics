const headerHeight = 0.25 * window.innerHeight;
const menuHeight = 0.75 * window.innerHeight;

const menuItemNames = ['Home', 'Team', 'Portfolio', 'Blog', 'Team', 'Contact'];
function colorGradient (red1, green1, blue1, red2, green2, blue2, colors = 6) {
    var colors = []
    var red = red1
    var green = green1
    var blue = blue1
    let redIncrement = (red2 - red1) / colors
    let blueIncrement = (blue2 - blue1) / colors
    let greenIncrement = (green2 - green1) / colors
    for (var loop = 0; loop < colors; loop++) {
        colors.push("rgb(" + red + ", " + green + ", " + blue + ")")
        red += redIncrement
        blue += blueIncrement
        green += greenIncrement
    }
    console.log("Colors: " + colors)
    return colors
}
let orangeYellow = colorGradient(255, 127, 0, 255, 255, 0)
const menuItemsCount = menuItemNames.length;
const menuItemHeight = menuHeight / menuItemsCount;

const pageHeight = window.innerHeight;

{
    let header = document.getElementById('header');
    header.style.height = headerHeight
    header.style.backgroundColor = 'black'
    header.style.color = 'white'
}
let menu = document.getElementById('menu');

for (let index = 0; index < menuItemsCount; index++) {
    let button = document.createElement('button')
    button.innerHTML = "<text>" + menuItemNames[index] + "</text>"
    button.style.height = menuItemHeight + 'px'
    button.style.backgroundColor = colorGradient[index]
    button.style.width = window.innerWidth + 'px'
    button.style.border = 'none'
    button.style.fontSize = menuItemHeight * 0.75 + 'px'
    if (index < 3) {
        button.style.color = 'black';
    } else {
        button.style.color = 'white';
    }
    button.id = menuItemNames[index]
    button.onclick = function () {
        window.open(menuItemNames[index] + '.html', '_self')
    }
    menu.appendChild(button);
}
