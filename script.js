setTimeout(() => {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
  }, 100);

  function openVideoPlayer() {
    // Replace 'your-video-url.mp4' with the actual URL or path to your video file
    var videoUrl = 'ScreenRecord.mp4';

    // Create the HTML content for the video player
    var videoContent = `
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

    // Open a new window with the video content
    var videoWindow = window.open();
    videoWindow.document.write(videoContent);

    // Close the document writing to make sure the content is displayed
    videoWindow.document.close();
  }