function GradientButton({ children, as = 'button', ...rest }) {
  const Comp = as
  return (
    <Comp className="app__nav-cta" {...rest}>
      {children}
    </Comp>
  )
}

export default GradientButton

