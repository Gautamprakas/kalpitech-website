import Icon from './Icon'
import { pricingTiers } from '../data/content'

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, honest pricing</h2>
          <p>Every project is different — here's a general idea of where things start.</p>
        </div>

        <div className="grid grid--3">
          {pricingTiers.map((tier) => (
            <div className={`pricing-card ${tier.highlighted ? 'pricing-card--highlighted' : ''}`} key={tier.name}>
              {tier.highlighted && <span className="pricing-card__badge">Most Popular</span>}
              <h3>{tier.name}</h3>
              <div className="pricing-card__price">
                {tier.price}
                {tier.suffix && <span className="pricing-card__suffix"> {tier.suffix}</span>}
              </div>
              <p className="pricing-card__desc">{tier.description}</p>
              <ul className="pricing-card__features">
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${tier.highlighted ? 'btn--primary' : 'btn--ghost'} btn--block`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Final pricing depends on scope, features, and timeline. Contact us for a free, no-obligation quote.
        </p>
      </div>
    </section>
  )
}
