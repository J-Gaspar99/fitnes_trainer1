import LightShimmerText from './LightShimmerText'
import SectionDecor from './SectionDecor'
import { FaClipboardList, FaVideo, FaAppleAlt, FaChartLine, FaFemale, FaDumbbell } from 'react-icons/fa'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const programIcons = {
  plan: FaClipboardList,
  video: FaVideo,
  nutrition: FaAppleAlt,
  progress: FaChartLine,
}

const goalIcons = {
  body: FaFemale,
  muscle: FaDumbbell,
}

export default function Program() {
  const headerRef = useScrollReveal()
  const { program } = siteContent

  return (
    <section id="program" className="section program">
      <SectionDecor variant="program" />
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{program.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {program.title}
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            {program.subtitle}
          </LightShimmerText>
        </div>

        <div className="program__goals-grid training-plans__grid">
          {program.goals.map((goal, i) => (
            <GoalCard key={goal.title} goal={goal} index={i} />
          ))}
        </div>

        <div className="program__grid">
          {program.features.map((feature, i) => (
            <ProgramCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GoalCard({ goal, index }) {
  const ref = useScrollReveal(0.1)
  const Icon = goalIcons[goal.icon]

  return (
    <div
      className="plan-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="plan-card__media">
        <img src={goal.image} alt={goal.title} className="plan-card__image" loading="lazy" />
        <div className="plan-card__overlay" />
        <div className="plan-card__icon">
          <Icon />
        </div>
      </div>
      <h3>{goal.title}</h3>
      <p>{goal.description}</p>
      <a href="#kontakt" className="plan-card__link">Saznaj više →</a>
    </div>
  )
}

function ProgramCard({ feature, index }) {
  const ref = useScrollReveal(0.1)
  const Icon = programIcons[feature.icon]

  return (
    <div
      className="program-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="program-card__media">
        <img src={feature.image} alt={feature.title} className="program-card__image" loading="lazy" />
        <div className="program-card__overlay" />
        <div className="program-card__icon">
          <Icon />
        </div>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  )
}
