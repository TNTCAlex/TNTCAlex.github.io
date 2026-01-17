const about = document.querySelector('.about');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      about.classList.add('active');
  },
  { threshold: 0.6 }
);

observer.observe(about);
