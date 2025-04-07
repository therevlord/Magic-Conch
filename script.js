const sounds = [
    'sounds/nothing.mp3',
    'sounds/try_again.mp3',
    'sounds/maybe_someday.mp3'
];

const magicConch = document.getElementById('magic-conch');

magicConch.addEventListener('click', () => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
});
