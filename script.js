document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 1.9,          // scroll yavaşlığı
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
    wheelMultiplier: 0.3,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});