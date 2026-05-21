import Banner from '@/components/homepage/Banner';
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
        
        </>
    );
};

export default HomePage;