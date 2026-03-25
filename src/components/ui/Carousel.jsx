import ProductCard from './ProductCard.jsx'
import Skeleton from './Skeleton.jsx'
import { useCarousel } from '../../hooks/useCarousel.js'

function Carousel({ products = [], carouselConfig, loading }) {
  if (loading) {
    return (
      <div className="carousel">
        <div className="carousel__track carousel__track--skeleton">
          {[0, 1, 2].map((key) => (
            <Skeleton key={key} className="product-card product-card--skeleton" />
          ))}
        </div>
      </div>
    )
  }

  const {
    index,
    itemsPerView,
    maxIndex,
    next,
    prev,
    goTo, 
    canNext,
    canPrev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel(products, carouselConfig)

  /*  FIXED OFFSET CALCULATION */
  const offsetPercent = (index * 100) / itemsPerView

  return (
    <div className="carousel">
      {carouselConfig.showArrows && maxIndex > 0 && (
        <button
          type="button"
          className="carousel__arrow carousel__arrow--left"
          onClick={prev}
          disabled={!canPrev}
        >
          ←
        </button>
      )}

      <div
        className="carousel__viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="carousel__track"
          style={{
            /* FIXED WIDTH CALCULATION */
            maxWidth: `${products.length * (100 / itemsPerView)}%`,
            /* REMOVED calc() + FIXED TRANSLATE */
            transform: `translateX(-${offsetPercent}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="carousel__item"
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {carouselConfig.showArrows && maxIndex > 0 && (
        <button
          type="button"
          className="carousel__arrow carousel__arrow--right"
          onClick={next}
          disabled={!canNext}
        >
          →
        </button>
      )}

      {/* FIXED PAGINATION */}
      <div className="carousel__pagination">
        {Array.from({ length: maxIndex+1}).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel__dot ${
              i === index ? 'carousel__dot--active' : ''
            }`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel