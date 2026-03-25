const GradientText = ({ children }) => {
  return (
    <span
      style={{
        background: "linear-gradient(90deg,#5B9CFF,#FFB86B)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;