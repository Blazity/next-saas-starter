import styled from 'styled-components';

import Link from 'components/Link';
import BasicSection from 'components/BasicSection';

import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import Testimonials from 'views/HomePage/Testimonials';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';

export default function Homepage() {
  return (
    <HomepageWrapper>
      <Hero />
      <Partners />
      <BasicSection imageUrl="/demo-illustration-1.png" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
          voluptate quo deleniti animi laboriosam.{' '}
          <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt at
          suscipit quis est soluta?
        </p>
      </BasicSection>
      <BasicSection imageUrl="/demo-illustration-2.png" title="Lorem ipsum dolor sit." overTitle="gugu gaga" reversed>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
          <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
        </p>
        <ul>
          <li>Professional point 1</li>
          <li>Professional remark 2</li>
          <li>Professional feature 3</li>
        </ul>
      </BasicSection>
      <Cta />
      <Features />
      <Testimonials />
      <FeaturesGallery />
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
