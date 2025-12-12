const video = document.getElementById("scrollVideo");

video.pause();
video.muted = true;

let currentFrame = 0;

// Esperar a que el vídeo conozca su duración
video.addEventListener("loadedmetadata", () => {
  const totalFrames = Math.floor(video.duration * 30); // 30 FPS

  window.addEventListener("scroll", () => {
    // Progreso del scroll
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = scrollTop / maxScroll;

    // Convertimos el scroll a frames del vídeo
    currentFrame = Math.floor(progress * totalFrames);

    // Aplicamos el frame correspondiente
    video.currentTime = currentFrame / 30; // 30 fps
  });
});
