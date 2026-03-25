const ProductCard = ({ title, image }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
};
export default ProductCard;