import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ValueSection() {
  const headerRef = useScrollReveal()
  const { value } = siteContent

  return (
    <section id="zasto" className="section value-section">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{value.label}</span>
          <h2 className="section-title">{value.title}</h2>
          <p className="section-subtitle">{value.subtitle}</p>
        </div>

        <div className="value-grid">
          {value.items.map((item, i) => (
            <ValueCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div className="value-section__cta scroll-reveal">
          <a href="#kontakt" className="btn btn--gold btn--lg shimmer-btn">
            {value.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function ValueCard({ item, index }) {
  const ref = useScrollReveal(0.1)

  return (
    <div
      className={`value-card scroll-reveal ${index % 2 === 1 ? 'value-card--reverse' : ''}`}
      ref={ref}
    >
      <div className="value-card__image shimmer-frame">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="value-card__content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
