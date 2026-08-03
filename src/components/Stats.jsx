import Icon from './Icon'
import { stats, industries } from '../data/content'

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stats__row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="industries">
          <h2 className="industries__title">Tailored Solutions Across Industries</h2>
          <div className="grid grid--4">
            {industries.map((industry) => (
              <div className="industry" key={industry.title}>
                <Icon name={industry.icon} size={20} />
                <span>{industry.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
