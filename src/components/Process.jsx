import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section section--muted">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">How We Work</span>
          <h2>A simple, transparent process</h2>
          <p>No surprises. You know what's happening at every step.</p>
        </div>

        <div className="grid grid--4 process">
          {process.map((item) => (
            <div className="process__item" key={item.step}>
              <span className="process__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
