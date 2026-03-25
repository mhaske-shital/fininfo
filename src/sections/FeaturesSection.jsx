import Carousel from '../components/ui/Carousel.jsx'
import Skeleton from '../components/ui/Skeleton.jsx'
import { useFeaturesContent } from '../hooks/useContent.js'

function FeaturesSection() {
  const { data, status, error, retry } = useFeaturesContent()
  const isLoading = status === 'loading' || status === 'idle'

  const section = data?.featuresSection

  return (
    <section className="section features">
      <div className="divider-row">
        <span className="divider-row__label">Platform</span>
        <span className="divider-row__line" />
      </div>

      {isLoading ? (
        <Skeleton className="features__header-skeleton" />
      ) : (
        <header className="features__header">
          <h2 className="platform__section__title">
            {section?.title}{' '}
            <span className="section__title-accent">{section?.titleAccent}</span>
          </h2>
          <p className="section__subtitle">{section?.subtitle}</p>
        </header>
      )}

      <div className="features__content">
        {error && (
          <div className="error-banner">
            <span>{error}</span>
            <button type="button" onClick={retry}>
              Retry
            </button>
          </div>
        )}

        <Carousel
          products={section?.products ?? []}
          carouselConfig={section?.carousel ?? { itemsPerView: { mobile: 1, tablet: 2, desktop: 3 }, showArrows: true }}
          loading={isLoading}
        />
      </div>
    </section>
  )
}

export default FeaturesSection

