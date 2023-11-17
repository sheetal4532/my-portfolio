var typed = new Typed(".text", {
  strings: ["Web Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

var typed = new Typed('#text', {
  strings: [" let me Introduce Myself", "I am a Web Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () => {
      document.querySelector('.popup-video').style.display = 'block';
      document.querySelector('.popup-video video').src = vid.getAttribute('src');
  }
});

document.querySelector('.popup-video span').onclick = () => {
  document.querySelector('.popup-video').style.display = 'none';
}