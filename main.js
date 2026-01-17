const about = document.querySelector('.about');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      about.classList.add('active');
    } else {
      about.classList.remove('active');
    }
  },
  { threshold: 0.6 }
);

observer.observe(about);
