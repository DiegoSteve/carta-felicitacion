// Obtener elementos del modal
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Obtener elementos del audio y botones
const bgMusic = document.getElementById('bg-music');
const startButton = document.getElementById('startButton');
const stopMusicButton = document.getElementById('stopMusicButton');

// Función para mostrar la imagen en el modal
function openModal(imgSrc) {
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Añadir eventos de clic a las imágenes
document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => openModal(img.src));
});

// Evento para cerrar el modal al hacer clic en la cruz
closeBtn.addEventListener('click', closeModal);

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Función para reproducir música
function playMusic() {
    bgMusic.play().catch(error => console.error('Error al reproducir música:', error));
}

// Función para detener música
function stopMusic() {
    bgMusic.pause();
    bgMusic.currentTime = 0; // Reinicia el tiempo a 0
}

// Evento para iniciar la celebración y reproducir música
startButton.addEventListener('click', playMusic);

// Evento para detener la música
stopMusicButton.addEventListener('click', stopMusic);

// Función para iniciar la celebración (confeti u otras animaciones pueden ir aquí)
function startCelebration() {
    // Aquí puedes añadir tu código para el confeti o cualquier otra animación
    console.log('¡Empezando la celebración!');
}

// Evento para iniciar la celebración
startButton.addEventListener('click', startCelebration);
