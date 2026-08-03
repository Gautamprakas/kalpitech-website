import Icon from './Icon'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">What We Do</span>
          <h2>Services built around your goals</h2>
          <p>From a simple landing page to a full custom platform — we scope it to fit your budget.</p>
        </div>

        <div className="grid grid--4">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="card__icon">
                <Icon name={service.icon} size={26} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
