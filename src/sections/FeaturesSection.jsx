import ProductCard from "../components/ui/ProductCard";
import Carousel from "../components/ui/Carousel";
import { useContent } from "../hooks/useContent";

const FeaturesSection = () => {
  const { products } = useContent();

  return (
    <div className="container center">
      <h2 className="feature-title">
  More ways <span>Grafterr</span> can help you <br />
  grow your business
</h2>

<p className="feature-sub">
  An award-winning, end-to-end restaurant technology & payments platform
</p>
      <Carousel>
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturesSection;