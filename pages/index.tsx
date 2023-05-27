import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Is My Customer Moving</title>
        <meta
          name="description"
          content="We help membership-focused home service companies retain customers who are moving to new homes. Get accurate ROI numbers and generate ready-to-buy leads for your business."
        />
        <meta name="keywords" content="customer retention, home service companies, moving, real-time data, ROI, ready-to-buy leads" />
        <meta property="og:title" content="Is My Customer Moving - Retain Your Customers During Relocation" />
        <meta
          property="og:description"
          content="We provide a unique service that helps home service companies retain customers who are moving to new homes. Generate high ROI and ready-to-buy leads for your business."
        />
        <meta property="og:image" content="/logo-black.png" />
        <meta property="og:url" content="https://www.ismycustomermoving.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is My Customer Moving - Retain Your Customers During Relocation" />
        <meta
          name="twitter:description"
          content="We provide a unique service that helps home service companies retain customers who are moving to new homes. Generate high ROI and ready-to-buy leads for your business."
        />
        <meta name="twitter:image" content="/logo-black.png" />
        {/* Additional meta tags for other marketing tools */}
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="My Customer Is Moving" overTitle="Listed Home For Sale">
            <p>
              Moving is one of the top three most stressful times in a humans life. Do not get lost as an after thought to your customer and
              instead, be proactive! <Link href="">Help them move their existing product or sell a whole new system.</Link> Your customers
              will thank you for not having to think about it and you will thank Is My Customer Moving for letting you know about the
              amazing lead.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="My Customer Already Moved" overTitle="New Customers" reversed>
            <p>
              Want to grow your existing customer base? <strong>Sell to the new home owners</strong>.
            </p>
            <ul>
              <li>Be the first to greet them when they move in</li>
              <li>You are already the experts on their home</li>
              <li>Keep your old customer and gain a new one too</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          {/* <Testimonials />
          <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
