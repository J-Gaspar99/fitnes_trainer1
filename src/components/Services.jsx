import { motion } from 'framer-motion'
import { FaDumbbell, FaLaptop, FaHeart, FaAppleAlt } from 'react-icons/fa'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap = {
  dumbbell: FaDumbbell,
  laptop: FaLaptop,
  heart: FaHeart,
  nutrition: FaAppleAlt,
}

export default function Services() {
  const headerRef = useScrollReveal()

  return (
    <section id="usluge" className="section services">
      <div className="services__bg" />

      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">Šta nudim</span>
          <h2 className="section-title">Usluge</h2>
          <p className="section-subtitle">
            Programi dizajnirani za tvoje jedinstvene ciljeve i životni stil
          </p>
        </div>

        <div className="services__grid">
          {siteContent.services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} index={i} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, Icon, index }) {
  const ref = useScrollReveal(0.1)

  return (
    <motion.div
      className="service-card scroll-reveal"
      ref={ref}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="service-card__icon">
        <Icon />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <span className="service-card__price">{service.price}</span>
      <div className="service-card__line" />
    </motion.div>
  )
}
