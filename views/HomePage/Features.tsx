import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Find Out Who Is Moving.',
    description: 'Get updated daily with any of your customers who have listed their home for sale.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Integrate With Your CRM.',
    description: 'We integrate with the top CRMs to connect to your customer list and update the records automatically.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Keep Track of Your Customers.',
    description:
      'Through our dashboard, you can see who is moving, who has moved, and who you have already contacted. We also autoamtically update your CRM with the same information so you can use whatever works best for you.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Connect To Zapier',
    description:
      'Want to automatically start a zap when someone is moving? We make it easy to connect to Zapier so you can do whatever you want with the data.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Your Data is Your Data',
    description:
      'We know how important your customers are to you. We promise to never sell your data or use it for anything other than what you want.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Get New Leads',
    description:
      'Want more, we make it easy to get a list of all new home sales in your area so you can start marketing to them right away.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  gap: 2rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
    gap: 1.5rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
    gap: 1rem;
  }

  /* Add the following styles to limit the total width of the grid */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 40rem; /* or set this to the desired height of the grid items */

  /* Add the following media query to adjust the grid for smaller screens */
  ${media('<=phone')} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
