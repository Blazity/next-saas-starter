import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
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
  // {
  //   imageUrl: '/grid-icons/asset-7.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-8.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-9.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
