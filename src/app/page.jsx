import Banner from '@/components/homepage/Banner';
import CtaSection from '@/components/homepage/CtaSection';
import HowItWorksSection from '@/components/homepage/HowItWorksSection';
import IdeaCategoriesSection from '@/components/homepage/IdeaCategoriesSection';
import TrendingIdeas from '@/components/homepage/TrendingIdeas';
import React from 'react';

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