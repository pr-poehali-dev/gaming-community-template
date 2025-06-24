import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Tournaments from "@/components/Tournaments";
import Streaming from "@/components/Streaming";
import Guides from "@/components/Guides";
import Community from "@/components/Community";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <Hero />
      <Tournaments />
      <Streaming />
      <Guides />
      <Community />
    </div>
  );
};

export default Index;
