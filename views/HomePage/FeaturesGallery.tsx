import React, { useState } from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';
import { Container } from 'components/Container';
import { media } from 'utils/media';
import Collapse from 'components/Collapse';

const TABS = [
  {
    title: 'Find relevant media contacts',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
    imageUrl: '/demo-illustration-3.png',
  },
  {
    title: 'Find relevant media contacts2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
    imageUrl: '/demo-illustration-4.png',
  },
  {
    title: 'Find relevant media contacts3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
    imageUrl: '/demo-illustration-5.png',
  },
  {
    title: 'Find relevant media contacts4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
    imageUrl: '/demo-illustration-6.png',
  },
  {
    title: 'Find relevant media contacts5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
    imageUrl: '/demo-illustration-7.png',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} layout="fill" objectFit="cover" priority={isFirst} />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab key={idx} onClick={() => handleTabClick(idx)}>
        {singleTab.title}
        <Collapse isOpen={isActive} duration={300}>
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <TabsContainer>{tabsMarkup}</TabsContainer>
      {imagesMarkup}
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 50rem;
  border-radius: 0.6rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: rgba(var(--secondary), 0.025);
  opacity: 0.9;
  cursor: pointer;
  border-radius: 0.6rem;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
