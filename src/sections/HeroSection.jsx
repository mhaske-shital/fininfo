import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";

const HeroSection = () => {
  return (
    <div className="container center">
      <h1>
        Looking for a new <br />
        <GradientText>technology provider?</GradientText>
      </h1>

      <p className="sub">
        Explore our success stories to see how businesses like yours
        
      </p>

      <GradientButton text="Learn more" />
    </div>
  );
};

export default HeroSection;