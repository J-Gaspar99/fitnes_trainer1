import { siteContent } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="brand-logo brand-logo--footer shimmer-logo">
            <img src="/images/brand/logo.png" alt="MDF logo" />
          </div>
          <span className="shimmer-text">{siteContent.brand}</span>
        </div>

        <p className="footer__tagline">{siteContent.tagline}</p>

        <div className="footer__links">
          <a href="#pocetna">Početna</a>
          <a href="#program">Program</a>
          <a href="#planovi">Planovi</a>
          <a href="#galerija">Galerija</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <p className="footer__copy">
          © {year} {siteContent.brand}. Sva prava zadržana.
        </p>

        <p className="footer__credit">
          Sajt urađen od strane{' '}
          <a
            href="https://audaxtim.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Audax TIM
          </a>
        </p>
      </div>
    </footer>
  )
}
