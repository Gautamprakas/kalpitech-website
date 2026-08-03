import { useRef } from 'react'
import Icon from './Icon'
import { projects } from '../data/content'

export default function Projects() {
  const rowRef = useRef(null)

  function scrollBy(amount) {
    rowRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Our Work</span>
          <h2>Live projects, not just mockups</h2>
          <p>Click a project to try it yourself — these are real, working demos.</p>
        </div>

        <div className="projects">
          <button
            type="button"
            className="projects__nav projects__nav--prev"
            onClick={() => scrollBy(-360)}
            aria-label="Scroll left"
          >
            <Icon name="arrow" size={18} className="projects__nav-icon" />
          </button>

          <div className="projects__row" ref={rowRef}>
            {projects.map((project) => (
              <a
                key={project.title}
                href={`${import.meta.env.BASE_URL}${project.url.replace(/^\//, '')}`}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-card__icon">
                  <Icon name={project.icon} size={24} />
                </div>
                <span className="project-card__tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-card__cta">
                  View Live Demo
                  <Icon name="arrow" size={16} />
                </span>
              </a>
            ))}
          </div>

          <button
            type="button"
            className="projects__nav projects__nav--next"
            onClick={() => scrollBy(360)}
            aria-label="Scroll right"
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
