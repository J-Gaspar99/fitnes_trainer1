import { siteContent } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__main">
          <p className="footer__tagline">{siteContent.tagline}</p>

          <nav className="footer__links" aria-label="Footer navigacija">
            <a href="#pocetna">Početna</a>
            <a href="#program">Program</a>
            <a href="#galerija">Galerija</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>

        <div className="footer__meta">
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
      </div>
    </footer>
  )
}
