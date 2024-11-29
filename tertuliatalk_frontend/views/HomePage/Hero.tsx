import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  return (
    <HeroWrapper>
      <Heading>TertuliaTalks'a Hoş Geldiniz!</Heading>

      <Contents>
        {role === null ? (
          <Description>
            TertuliaTalks size rahat ve interaktif bir ortamda İngilizce iletişim
            becerilerinizi geliştirmek için eşsiz bir fırsat sunuyor.
          </Description>
        ) : (
          <>
            {role === 'Teacher' && <Description>Teacher</Description>}
            {role === 'Student' && <Description>Student</Description>}
            {role === 'User' && <Description>User</Description>}
            {role === 'SuperAdmin' && <Description>SuperAdmin</Description>}
          </>
        )}
      </Contents>

      <FeaturesGalleryWrapper>
        <FeaturesGallery />
      </FeaturesGalleryWrapper>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  ${media('<=desktop')} {
    padding-top: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    font-size: 2.8rem;
    text-align: center;
  }
`;

const Contents = styled.div`
  width: 100%;
  max-width: 60rem;
  text-align: center;
  margin-bottom: 10rem;

  ${media('<=desktop')} {
    max-width: 90%;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;
  line-height: 1.5;

  ${media('<=desktop')} {
    font-size: 1.4rem;
  }
`;

const FeaturesGalleryWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media('<=desktop')} {
    flex-direction: column;
    margin-top: 1.5rem;
    padding: 1rem;
    gap: 1rem;
  }

  ${media('<=tablet')} {
    padding: 0.5rem;
    gap: 0.8rem;
  }
`;
