import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { siteContent } from '../data/content'
import { useParallax } from '../hooks/useScrollReveal'

export default function Hero() {
  const imageRef = useParallax(0.4)
  const silhouetteRef = useParallax(0.2)

  return (
    <section id="pocetna" className="hero">
      <div className="hero__bg">
        <img
          src="/images/brand/hero-banner.png"
          alt=""
          className="hero__bg-image"
          aria-hidden="true"
        />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-pattern" />
        <div className="hero__bg-glow hero__bg-glow--purple" />
        <div className="hero__bg-glow hero__bg-glow--gold" />
        <div className="hero__particles" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="hero__particle" style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >


          <span className="hero__badge">
            <span className="hero__badge-dot" />
            {siteContent.hero.subtitle}
          </span>

          <h1 className="hero__title">
            <span className="hero__title-line shimmer-text">{siteContent.name}</span>
            <span className="hero__title-accent shimmer-text shimmer-text--purple">Fitnes</span>
          </h1>

          <p className="hero__tagline">{siteContent.tagline}</p>
          <p className="hero__description">{siteContent.hero.description}</p>

          <div className="hero__actions">
            <a href="#kontakt" className="btn btn--gold btn--lg shimmer-btn">
              {siteContent.hero.cta}
            </a>
            <a href="#galerija" className="btn btn--outline btn--lg shimmer-border">
              {siteContent.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero__stats">
            {siteContent.about.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value shimmer-text">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >


          <div className="hero__frame shimmer-frame" ref={imageRef}>
            <div className="hero__frame-border shimmer-border" />
            <img
              src="/images/hero.jpg"
              alt="Marija Đorđević — fitnes trener"
              className="hero__image"
            />
            <div className="hero__frame-accent shimmer-glow-purple" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#o-meni"
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Skroluj dole"
      >
        <HiArrowDown />
      </motion.a>
    </section>
  )
}
