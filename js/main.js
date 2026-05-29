
gsap.registerPlugin(ScrollTrigger);

/* HERO BUTTON */

const scrollBtn =
document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', () => {

    document.querySelector('#nextSection')
    .scrollIntoView({
        behavior: 'smooth'
    });

});

/* SECRET MESSAGE */

const secretBtn =
document.getElementById('secretBtn');

const secretMessage =
document.getElementById('secretMessage');

const cinematicFocus =
document.getElementById('cinematicFocus');

const closeSecret =
document.getElementById('closeSecret');

const secretSection =
document.querySelector('.secret-section');

const audioPlayer =
document.getElementById('audioPlayer');

let secretOpened = false;

secretBtn.addEventListener('click', () => {

    if (!secretOpened) {

        secretOpened = true;

        /* MESSAGE */

        secretMessage.classList.add('active');

        /* BUTTON */

        secretBtn.classList.add('opened');

        secretBtn.innerText =
        'сообщение открыто';

        /* FOCUS */

        cinematicFocus.classList.add('active');

        /* CAMERA */

        secretSection.classList.add('focus-mode');

        /* MUSIC LOWER */

        gsap.to(audioPlayer, {

            volume: 0.18,

            duration: 2

        });

        /* MESSAGE ANIMATION */

        gsap.fromTo(

            '.secret-message',

            {
                y: 120,
                opacity: 0,
                scale: 0.9
            },

            {
                y: 0,
                opacity: 1,
                scale: 1,

                duration: 1.8,

                ease: 'power4.out'
            }

        );

        /* GLOW */

        gsap.fromTo(

            '.secret-message',

            {
                boxShadow:
                '0 0 0 rgba(255,255,255,0)'
            },

            {
                boxShadow:
                '0 0 120px rgba(255,255,255,0.08)',

                duration: 2
            }

        );

    }
/* CLOSE SECRET */

closeSecret.addEventListener('click', () => {

    secretMessage.classList.remove('active');

    cinematicFocus.classList.remove('active');

    secretSection.classList.remove('focus-mode');

    secretBtn.classList.remove('opened');

    secretBtn.innerText =
    'открыть сообщение';

    secretOpened = false;

    /* RETURN MUSIC */

    gsap.to(audioPlayer, {

        volume: 0.7,

        duration: 2

    });

});
});

/* HERO ANIMATION */

gsap.from('.hero-title', {

    opacity: 0,
    y: 100,
    duration: 1.5

});

gsap.from('.hero-text', {

    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.4

});

gsap.from('.hero-buttons', {

    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.7

});

/* SCROLL ANIMATIONS */

gsap.from('.memory-item', {

    scrollTrigger: {
        trigger: '.memory-section',
        start: 'top 70%'
    },

    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1.2

});

gsap.from('.cinematic-title', {

    scrollTrigger: {
        trigger: '.cinematic-section',
        start: 'top center'
    },

    opacity: 0,
    y: 100,
    duration: 1.5

});
/* LAST BELL ANIMATION */

gsap.from('.lastbell-title', {

    scrollTrigger: {
        trigger: '.lastbell-section',
        start: 'top center'
    },

    opacity: 0,
    y: 120,
    duration: 1.6

});

/* GALLERY */

gsap.from('.gallery-grid video', {

    scrollTrigger: {
        trigger: '.gallery-section',
        start: 'top 75%'
    },

    opacity: 0,
    y: 100,
    stagger: 0.25,
    duration: 1.3

});
/* MUSIC PLAYER */

const musicToggle =
document.getElementById('musicToggle');

const musicPlayer =
document.getElementById('musicPlayer');

const closePlayer =
document.getElementById('closePlayer');

musicToggle.addEventListener('click', () => {

    musicPlayer.classList.add('active');

});

closePlayer.addEventListener('click', () => {

    musicPlayer.classList.remove('active');

});

/* AUDIO */

const audio =
document.getElementById('audioPlayer');

const tracks =
document.querySelectorAll('.track');

const playPauseBtn =
document.getElementById('playPauseBtn');

const progressBar =
document.getElementById('progressBar');

const volumeBar =
document.getElementById('volumeBar');

const currentTrackName =
document.getElementById('currentTrackName');

const currentTimeEl =
document.getElementById('currentTime');

const durationEl =
document.getElementById('duration');

const prevBtn =
document.getElementById('prevBtn');

const nextBtn =
document.getElementById('nextBtn');

let currentIndex = 0;

audio.volume = 0.7;

function loadTrack(index) {

    tracks.forEach(track => {

        track.classList.remove('active-track');

    });

    tracks[index].classList.add('active-track');

    audio.src =
    tracks[index].dataset.src;

    currentTrackName.innerText =
    tracks[index].dataset.title;
}

loadTrack(currentIndex);

/* TRACK CLICK */

tracks.forEach((track, index) => {

    track.addEventListener('click', () => {

        currentIndex = index;

        loadTrack(currentIndex);

        audio.play();

        playPauseBtn.innerText =
        'pause';

    });

});

/* PLAY */

playPauseBtn.addEventListener('click', () => {

    if (audio.paused) {

        audio.play();

        playPauseBtn.innerText =
        'pause';

    } else {

        audio.pause();

        playPauseBtn.innerText =
        'play';

    }

});

/* NEXT */

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if (currentIndex >= tracks.length) {

        currentIndex = 0;
    }

    loadTrack(currentIndex);

    audio.play();

});

/* PREV */

prevBtn.addEventListener('click', () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
        tracks.length - 1;
    }

    loadTrack(currentIndex);

    audio.play();

});

/* PROGRESS */

audio.addEventListener('timeupdate', () => {

    progressBar.value =
    (audio.currentTime / audio.duration)
    * 100;

    currentTimeEl.innerText =
    formatTime(audio.currentTime);

    durationEl.innerText =
    formatTime(audio.duration);

});

/* SEEK */

progressBar.addEventListener('input', () => {

    audio.currentTime =
    (progressBar.value / 100)
    * audio.duration;

});

/* VOLUME */

volumeBar.addEventListener('input', () => {

    audio.volume =
    volumeBar.value;

});

/* FORMAT */

function formatTime(time) {

    if (isNaN(time)) return '0:00';

    const minutes =
    Math.floor(time / 60);

    const seconds =
    Math.floor(time % 60);

    return `${minutes}:${seconds
        .toString()
        .padStart(2, '0')}`;
}

/* AUTO NEXT */

audio.addEventListener('ended', () => {

    currentIndex++;

    if (currentIndex >= tracks.length) {

        currentIndex = 0;
    }

    loadTrack(currentIndex);

    audio.play();

});

/* PROGRESS */

audio.addEventListener('timeupdate', () => {

    progressBar.value =
    (audio.currentTime / audio.duration)
    * 100;

});

progressBar.addEventListener('input', () => {

    audio.currentTime =
    (progressBar.value / 100)
    * audio.duration;

});
/* INTRO */

const introScreen =
document.getElementById('introScreen');

const enterSite =
document.getElementById('enterSite');

enterSite.addEventListener('click', () => {

    introScreen.classList.add('hidden');

});

/* CURSOR */

const cursor =
document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {

    gsap.to(cursor, {

        x: e.clientX,
        y: e.clientY,

        duration: 0.15

    });

});

/* PARALLAX */

document.addEventListener('mousemove', e => {

    const x =
    (window.innerWidth / 2 - e.clientX)
    / 40;

    const y =
    (window.innerHeight / 2 - e.clientY)
    / 40;

    gsap.to('.gradient-circle', {

        x,
        y,

        duration: 1.5

    });

});
/* FLOATING CAMERA */

window.addEventListener('mousemove', e => {

    const x =
    (window.innerWidth / 2 - e.clientX)
    / 120;

    const y =
    (window.innerHeight / 2 - e.clientY)
    / 120;

    gsap.to('.hero-content', {

        x,
        y,

        duration: 2

    });

    gsap.to('.cinematic-content', {

        x: x * 0.7,
        y: y * 0.7,

        duration: 2

    });

});
/* LENIS */

const lenis = new Lenis({

    duration: 1.4,

    smoothWheel: true,

    wheelMultiplier: 0.9

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);