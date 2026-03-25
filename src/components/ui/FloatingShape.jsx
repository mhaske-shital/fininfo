function FloatingShape({ variant }) {
  const base = 'floating-shape'
  const className = `${base} ${base}--${variant}`
  return <div className={className} aria-hidden="true" />
}

export default FloatingShape

