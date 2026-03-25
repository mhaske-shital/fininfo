import FloatingShape from '../components/ui/FloatingShape.jsx'
import GradientText from '../components/ui/GradientText.jsx'
import GradientButton from '../components/ui/GradientButton.jsx'
import Skeleton from '../components/ui/Skeleton.jsx'
import { useHeroContent } from '../hooks/useContent.js'
import heroImg from '../assets/hero.png'

function HeroSection() {
  const { data, status, error, retry } = useHeroContent()

  const nav = data?.navigation
  const hero = data?.hero

  const isLoading = status === 'loading' || status === 'idle'

  return (
    <section className="section hero">
      <header className="app__nav">
        <div className="app__nav-left">
          <div className="app__nav-logo">G</div>
          <div>
            {/* <div className="app__nav-text-main">{nav?.logo?.alt ?? 'Grafterr'}</div>              */}
          </div>
        </div>

        <nav className="app__nav-links">
          {nav?.links?.map((link) => (
            <span key={link.label} className="app__nav-link">
              {link.label}
            </span>
          ))}
          <button type="button" className="app__nav-cta">
            {nav?.cta?.label}
          </button>
        </nav>
      </header>

      <div className="app__layout">
        <div className='app__topdiv'>
          {isLoading ? (
            <Skeleton className="hero__copy-skeleton" />
          ) : (
            <>
              {/* <div className="section__eyebrow">
                <span className="section__eyebrow-dot" />
                <span>Built for restaurants</span>
              </div> */}

              <h1 className="section__title hero__title">
                {hero?.headlinePrefix}{' '}
                <GradientText>{hero?.headlineGradient}</GradientText>
              </h1>
              <p className="section__subtitle hero__subtitle">{hero?.subheadline}</p>

              <div className="hero__actions">
                <GradientButton type="button">
                  {hero?.cta?.label}                  
                </GradientButton>

                {/* <button type="button" className="hero__secondary-cta">
                  {hero?.secondaryCta?.label}
                </button> */}
              </div>

              {/* <dl className="hero__metrics">
                {hero?.metrics?.map((metric) => (
                  <div key={metric.label} className="hero__metric">
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl> */}

              {error && (
                <div className="error-banner hero__error">
                  <span>{error}</span>
                  <button type="button" onClick={retry}>
                    Retry
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="hero__visual-wrapper">
          {isLoading ? (
            <Skeleton className="hero__visual-skeleton" />
          ) : (
            <div className="hero__visual">
              <FloatingShape variant="teal" />
              <FloatingShape variant="coral" />
              <div className="hero__card">
                <img src={heroImg} alt="" className="hero__card-img" />
                <div className="hero__card-glow hero__card-glow--teal" />
                <div className="hero__card-glow hero__card-glow--coral" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

