import { Container } from 'components/Container';
import React from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, A11y } from 'swiper';
import Separator from 'components/Separator';
import { media } from 'utils/media';

SwiperCore.use([Navigation]);

const TESTIMONIALS = [
  {
    companyLogoUrl: '/testimonials/company-logo-1.svg',
    content: `Really good. I am so pleased with this product. I didn't even need training.`,
    author: {
      name: 'Clyde Edwards',
      title: 'Very Serious Man',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-2.svg',
    content: `It's really wonderful. I use saas product often. Thank You! Saas product has really helped our business.`,
    author: {
      name: 'Jimmy Hunter',
      title: 'Sigma Male University Graduate',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/company-logo-3.svg',
    content: `Since I invested in saas product I made over 100,000 dollars profits. It really saves me time and effort. saas product is exactly what our business has been lacking.`,
    author: {
      name: 'Marjorie Morgan',
      title: 'Chief Chad Officer',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <NextImage src={singleTestimonial.companyLogoUrl} width={200} height={40} />
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} width={48} height={48} />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;
  max-width: 80%;
  --swiper-navigation-color: red;

  .swiper-button-prev:after,
  .swiper-button-next:after {
    /* // TODO: figure out a way to style prev/next signs */
  }

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
