const backgrounds = ['src/background/coche.jpg', 'src/background/history.jpg', 'src/background/hojas.jpg', 'src/background/light.jpg', 'src/background/house.jpg'];
let currentBackground = 0;

function changeBackground() {
    document.querySelector('body:before').style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    currentBackground = (currentBackground + 1) % backgrounds.length;
}

setInterval(changeBackground, 10000); // Cambia la imagen cada 10 segundos