import Container from 'components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import ArticleCard from 'components/ArticleCard';
import SectionTitle from 'components/SectionTitle';
import OverTitle from 'components/OverTitle';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function ScrollableBlogPosts() {
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
          }}
        >
          <SwiperSlide className="first-slide">
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard
              title="An analysis on developer-security researcher interactions in the vulnerability disclosure process"
              description="This blog post is a special report providing insights into developers’ interactions with security researchers through the vulnerability disclosure process and their views and perspectives on the security research community. The analysis is brought to you from the GitHub Security Lab."
              readTime="10"
              imageUrl="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?w=1200"
              slug="test-article"
            />
          </SwiperSlide>
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
    margin-top: 4rem;
  }
`;

const Section = styled.section`
  & > *:not(:first-child) {
    margin-top: 4rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 130em;

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }

  .first-slide {
    margin-left: 2rem;
  }
`;
