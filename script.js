document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Function to open video player
function openVideoPlayer(videoUrl = 'ScreenRecord.mp4') {
  const videoContent = `
    <html>
    <head>
      <title>Video Player</title>
    </head>
    <body>
      <video width="640" height="360" controls autoplay>
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </body>
    </html>
  `;

  const videoWindow = window.open();
  videoWindow.document.write(videoContent);
  videoWindow.document.close();
}
