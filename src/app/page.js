import Banner from "@/components/Banner";
import FeatureJobsSection from "@/components/FeatureJobsSection";
import SmartJobDiscovery from "@/components/SmartJobDiscovery";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <Banner />
      <StatsSection />
      <SmartJobDiscovery />
      <FeatureJobsSection />

    </div>
  );
}
