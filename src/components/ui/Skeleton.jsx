function Skeleton({ className = '', ...rest }) {
  return <div className={`skeleton ${className}`.trim()} {...rest} />
}

export default Skeleton

