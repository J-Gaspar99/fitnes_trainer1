import LightShimmerText from './LightShimmerText'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { siteContent } from '../data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const slides = siteContent.heroSlides
  const intro = siteContent.heroIntro

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section id="pocetna" className="hero-slider">
      <div className="container hero-slider__layout">
        <div className="hero-slider__intro">
          <span className="hero-slider__intro-badge">{intro.badge}</span>
          <p className="hero-slider__intro-name">{intro.title}</p>
          <LightShimmerText as="h1" variant="hero" className="hero-slider__intro-title">
            {intro.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </LightShimmerText>
          <p className="hero-slider__intro-desc">{intro.description}</p>
          <div className="hero-slider__intro-actions">
            <a href="#kontakt" className="btn btn--gold shimmer-btn">
              {intro.ctaPrimary}
            </a>
            <a href="#program" className="btn btn--outline">
              {intro.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-slider__visual">
          <div className="hero-slider__image-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.label}
                className="hero-slider__image"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
              />
            </AnimatePresence>
            <div className="hero-slider__image-shine" aria-hidden="true" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="hero-slider__pitch"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <span className="hero-slider__label">{slide.label}</span>
              <LightShimmerText as="h2" variant="hero" className="hero-slider__pitch-title">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </LightShimmerText>
              <p className="hero-slider__pitch-desc">{slide.description}</p>
              <a href="#kontakt" className="hero-slider__pitch-cta">
                {slide.cta} →
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="hero-slider__controls">
            <button onClick={prev} className="hero-slider__arrow" aria-label="Prethodni slajd">
              <HiChevronLeft />
            </button>
            <div className="hero-slider__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-slider__dot ${i === current ? 'hero-slider__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slajd ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="hero-slider__arrow" aria-label="Sledeći slajd">
              <HiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
