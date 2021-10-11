import styled from 'styled-components';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { SingleArticle } from 'types';
import { media } from 'utils/media';

interface ScrollableBlogPostsProps {
  posts: SingleArticle[];
}

export default function ScrollableBlogPosts({ posts }: ScrollableBlogPostsProps) {
  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>features</OverTitle>
          <SectionTitle>What are you signing in for?</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer>
        <Swiper
          modules={[A11y]}
          slidesPerView={3.5}
          spaceBetween={10}
          breakpoints={{
            300: { slidesPerView: 1.1 },
            400: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 4, centeredSlides: true },
            1500: { slidesPerView: 6, centeredSlides: true },
          }}
        >
          {posts.map((singlePost, idx) => (
            <SwiperSlide className={idx === 0 ? 'first-slide' : undefined} key={singlePost.meta.title}>
              <ArticleCard
                title={singlePost.meta.title}
                description={singlePost.meta.description}
                imageUrl={singlePost.meta.imageUrl}
                slug={singlePost.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }

  .first-slide {
    margin-left: 2rem;
  }
`;
