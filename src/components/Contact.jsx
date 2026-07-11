import LightShimmerText from './LightShimmerText'
import SectionDecor from './SectionDecor'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const headerRef = useScrollReveal()
  const actionRef = useScrollReveal(0.08)
  const { platform } = siteContent

  return (
    <section id="platforma" className="section platform-cta">
      <SectionDecor variant="cta" />
      <div className="platform-cta__bg" />

      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{platform.section.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {platform.section.title}
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            {platform.section.subtitle}
          </LightShimmerText>
        </div>

        <div className="platform-cta__card scroll-reveal" ref={actionRef}>
          <h3>{platform.section.cardTitle}</h3>
          <p>{platform.section.cardDescription}</p>
          <a
            href={platform.url}
            className="btn btn--gold btn--lg shimmer-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
