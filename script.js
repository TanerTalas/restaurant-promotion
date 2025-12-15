const sections = document.querySelectorAll(
  '#about-us-container, #menu-container, #myCarousel1'
)

const navLinks = document.querySelectorAll('.nav-link')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'))

        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        )

        if (activeLink) {
          activeLink.classList.add('active')
        }
      }
    })
  },
  {
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0,
  }
)

sections.forEach(section => observer.observe(section))

const fadeElements = document.querySelectorAll('.fade-up')

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target) // 🔥 bir kere çalışsın
      }
    })
  },
  {
    threshold: 0.2,          // %20 görünür olunca başlasın
    rootMargin: '0px 0px -50px 0px' // çok erken tetiklenmesin
  }
)

fadeElements.forEach(el => observer2.observe(el))