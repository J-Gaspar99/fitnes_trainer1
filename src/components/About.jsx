import { motion } from 'framer-motion'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const contentRef = useScrollReveal()
  const imageRef = useScrollReveal()

  return (
    <section id="o-meni" className="section about">
      <div className="container">
        <div className="section-header scroll-reveal" ref={contentRef}>
          <span className="section-label">Upoznaj me</span>
          <h2 className="section-title">{siteContent.about.title}</h2>
          <p className="section-subtitle">{siteContent.about.subtitle}</p>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__image-wrap scroll-reveal"
            ref={imageRef}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="about__image-frame">
              <img
                src="/images/about.png"
                alt="Marija Đorđević na treningu"
                className="about__image"
              />
              <div className="about__image-overlay" />
            </div>
            <div className="about__experience">
              <span className="about__experience-number">8+</span>
              <span className="about__experience-text">godina<br />iskustva</span>
            </div>
          </motion.div>

          <div className="about__content scroll-reveal">
            {siteContent.about.paragraphs.map((p, i) => (
              <p key={i} className="about__text">{p}</p>
            ))}

            <div className="about__highlights">
              {['Sertifikovani trener', 'Personalizovani programi', 'Online & uživo'].map(
                (item) => (
                  <div key={item} className="about__highlight">
                    <span className="about__highlight-dot" />
                    {item}
                  </div>
                )
              )}
            </div>

            <a href="#kontakt" className="btn btn--purple">
              Započni transformaciju
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
