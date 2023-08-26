function callIt() {
    const myElement = document.body;
    myElement.style.backgroundColor = generateColors();
    const values = document.getElementById("output").value = generateColors();
    const copy = document.getElementById('copy-id');
    copy.addEventListener('click', function () {
        navigator.clipboard.writeText(values)
    })
}

function generateColors() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}