import Icon from './Icon'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className="eyebrow">Web · Mobile · Custom Software · UI/UX</span>
        <h1>
          Software solutions that help your business <span className="text-gradient">move faster</span>
        </h1>
        <p className="hero__lead">
          We design and build websites, apps, and custom software for startups and small businesses —
          affordable, reliable, and delivered directly by the people who build it.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Get a Free Quote
            <Icon name="arrow" size={18} />
          </a>
          <a href="#services" className="btn btn--ghost">
            View Services
          </a>
        </div>
        <div className="hero__price-badge">
          <Icon name="check" size={16} />
          Projects start at just <strong>&#8377;5,000</strong>
        </div>

        <div className="hero__visual">
          <img
            src={`${import.meta.env.BASE_URL}banner_1.webp`}
            alt="Kalpitech — custom software, Android apps and web portals"
            width="1400"
            height="764"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
