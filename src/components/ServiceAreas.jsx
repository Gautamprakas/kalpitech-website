import { serviceAreas } from '../data/content'

export default function ServiceAreas() {
  return (
    <section className="service-areas" aria-label="Areas we serve">
      <div className="container service-areas__inner">
        <span className="service-areas__label">Proudly serving businesses across</span>
        <div className="service-areas__list">
          {serviceAreas.map((area) => (
            <span key={area} className="service-areas__chip">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
