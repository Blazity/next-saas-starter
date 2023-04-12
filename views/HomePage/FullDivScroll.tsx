import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';

interface FullDivScrollProps {
}

export default function FullDivScroll({}: FullDivScrollProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();


  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
            {posts.map((singlePost, idx) => (
              <SwiperSlide key={singlePost.meta.title}>
                <ArticleCard
                  title={singlePost.meta.title}
                  description={singlePost.meta.description}
                  imageUrl={singlePost.meta.imageUrl}
                  slug={singlePost.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;
