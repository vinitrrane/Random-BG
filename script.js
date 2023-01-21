
const mainButton = document.querySelector('button');

const body = document.body;

const span = document.querySelector('.current-color');

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red},${green},${blue})`

    return randomColor;
}



mainButton.addEventListener('click', (e) => {

    const randomColor = randomColorGenerator();

    body.style.backgroundColor = randomColor;

    span.textContent = randomColor

})

