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