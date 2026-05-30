import Banner from '@/components/homepage/Banner';
import CtaSection from '@/components/homepage/CtaSection';
import HowItWorksSection from '@/components/homepage/HowItWorksSection';
import IdeaCategoriesSection from '@/components/homepage/IdeaCategoriesSection';
import TrendingIdeas from '@/components/homepage/TrendingIdeas';

export const metadata = {
  title: 'IdeaVault | Discover & Share Startup Ideas',
  description: 'Explore innovative startup ideas, collaborate with creators, and validate concepts on IdeaVaults community-driven platform.',
};
const HomePage = () => {
    return (
        <>
        <Banner/>
        <TrendingIdeas/>
        <HowItWorksSection/>
        <IdeaCategoriesSection/>
        <CtaSection/>
        
        </>
    );
};

export default HomePage;