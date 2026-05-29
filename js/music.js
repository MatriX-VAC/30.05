const music = document.getElementById('bgMusic');

document.body.addEventListener('click', () => {

    music.volume = 0.3;

    music.play();

}, { once: true });