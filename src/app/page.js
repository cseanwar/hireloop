import Banner from "@/components/Banner";
import CTASection from "@/components/CtaSection";
import FeatureJobsSection from "@/components/FeatureJobsSection";
import PricingSection from "@/components/PricingSection";
import SmartJobDiscovery from "@/components/SmartJobDiscovery";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <Banner />
      <StatsSection />
      <SmartJobDiscovery />
      <FeatureJobsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
