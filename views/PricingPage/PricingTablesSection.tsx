import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowButton from 'components/ArrowButton';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const pricingPlans = [
    {
      title: 'Free',
      description: 'Give us a try for free',
      price: '$0',
      benefits: [
        '1 User',
        'See How Many Customers You Have Moving',
        'See All Your Customers That Have Recently Moved',
        'Get a New Leads List For People Moving In Your Area',
      ],
      checkoutLink: '',
    },
    {
      title: 'Silver',
      description: 'For Small Businesses',
      price: '$150',
      benefits: [
        '5,000 Clients',
        'Unlimited Users',
        'See Your Customers That Are Moving',
        'See Your Customers That Have Recently Moved',
        'Daily Email Updates',
        'CSV Downloader',
      ],
      checkoutLink: 'https://buy.stripe.com/eVa7tU8cJgDs8UwdR4',
    },
    {
      title: 'Gold',
      description: 'For Large Businesses With An Extensive Client Base',
      price: '$250',
      benefits: [
        '10,000 Clients',
        'Unlimited Users',
        'See Your Customers That Are Moving',
        'See Your Customers That Have Recently Moved',
        'Daily Email Updates',
        'CSV Downloader',
        'See Who Is Moving In Your Area Each Week',
      ],
      checkoutLink: 'https://buy.stripe.com/9AQ4hIcsZdrg9YA7sH',
    },
    {
      title: 'Platinum',
      description: 'For Long Established Client Bases',
      price: '$400',
      benefits: [
        '20,000 Clients',
        'Personalized Marketing Campaigns',
        'Unlimited Users',
        'See Your Customers That Are Moving',
        'See Your Customers That Have Recently Moved',
        'Daily Email Updates',
        'CSV Downloader',
        'See Who Is Moving In Your Area Each Week',
      ],
      checkoutLink: 'https://buy.stripe.com/9AQaG678F86W3Ac6os',
    },
    {
      title: 'Enterprise',
      description: 'Need more? We can help!',
      price: '!!!',
      benefits: ['Flexible Pricing Options', 'Custom Solutions For Your Needs', 'Setup done with you and your team'],
      checkoutLink: 'https://ismycustomermoving.com/#contact',
    },
  ];

  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for any size business</SectionTitle>
      <PricingContainer>
        <ArrowButton onClick={() => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))} disabled={currentIndex === 0}>
          {'<'}
        </ArrowButton>
        <AutofitGrid>
          {pricingPlans.slice(currentIndex, currentIndex + 3).map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              benefits={plan.benefits}
              checkoutLink={plan.checkoutLink}
              isOutlined={index === 1}
            >
              {plan.price}
            </PricingCard>
          ))}
        </AutofitGrid>
        <ArrowButton
          onClick={() => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pricingPlans.length - 3))}
          disabled={currentIndex === pricingPlans.length - 3}
        >
          {'>'}
        </ArrowButton>
      </PricingContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;

const PricingContainer = styled.div`
  display: flex;
  align-items: center;
`;
