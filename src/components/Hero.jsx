import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { siteContent } from '../data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const slides = siteContent.heroSlides

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
      <div className="hero-slider__bg">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            className="hero-slider__bg-image"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
          />
        </AnimatePresence>
        <div className="hero-slider__overlay" />
        <div className="hero-slider__glow hero-slider__glow--purple" />
        <div className="hero-slider__glow hero-slider__glow--gold" />
      </div>

      <div className="container hero-slider__inner">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-slider__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-slider__label">{slide.label}</span>
            <h1 className="hero-slider__title shimmer-text">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className="hero-slider__desc">{slide.description}</p>
            <a href="#kontakt" className="btn btn--gold btn--lg shimmer-btn">
              {slide.cta}
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
    </section>
  )
}
