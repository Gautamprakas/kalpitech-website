import Icon from './Icon'
import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section id="about" className="section section--muted">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Why Kalpitech</span>
          <h2>Built for startups & small businesses</h2>
          <p>We keep things lean so you get quality software without agency-level costs.</p>
        </div>

        <div className="grid grid--4">
          {whyUs.map((item) => (
            <div className="why-item" key={item.title}>
              <div className="why-item__icon">
                <Icon name="check" size={18} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
