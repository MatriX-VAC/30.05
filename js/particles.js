const particlesContainer = document.getElementById('particles');

for (let i = 0; i < 70; i++) {

    const particle = document.createElement('div');

    particle.classList.add('particle');

    particle.style.left = Math.random() * 100 + 'vw';

    particle.style.animationDuration =
        Math.random() * 10 + 8 + 's';

    particle.style.animationDelay =
        Math.random() * 5 + 's';

    particle.style.opacity =
        Math.random();

    particle.style.width =
        Math.random() * 4 + 1 + 'px';

    particle.style.height =
        particle.style.width;

    particlesContainer.appendChild(particle);

}