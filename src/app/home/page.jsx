import ConstructionSection from '@/components/ConstructionSection';
import HeroSection from '@/components/HeroSection';
import MetarySection from '@/components/MetarySection';
import ServicesCards from '@/components/ServecesCards';
import ServiceCardsSection from '@/components/ServiceCardsSection';
import ServiceSection from '@/components/ServiceSection';
import SolutionsSection from '@/components/SolutionsSection';
import React from 'react';

const Root = () => {
    return (
      <div>
        <section>
          <HeroSection />
        </section>

            <section>
                <ConstructionSection/>
            </section>
            <section>
                <MetarySection/>
            </section>
            <section>
                <ServiceSection/>
            </section>
            <section>
                <ServicesCards/>
            </section>
            <section>
                <SolutionsSection/>
            </section>
            <section>
                <ServiceCardsSection/>
            </section>
      </div>
    );
};

export default Root;