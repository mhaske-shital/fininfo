function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__badge">{product.badge}</div>
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__body">{product.description}</p>
      <p className="product-card__tagline">{product.tagline}</p>
    </article>
  )
}

export default ProductCard

