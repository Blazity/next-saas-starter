// import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
// import Features from 'views/HomePage/Features';
// import FeaturesGallery from 'views/HomePage/FeaturesGallery';
// import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';
import useMySwipeHandlers from 'hooks/useMySwipeHandlers';


const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>



      {/*<ScrollLink to="section2" smooth={true} offset={-57}>*/}
        <div id="section1" {...useMySwipeHandlers("section2", "", true)}>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.
            </p>
          </BasicSection>
        </div>
      {/*</ScrollLink>*/}

        <div id="section2" {...useMySwipeHandlers("section3", "section1", true)}>
          <Cta />
        </div>

        <div id="section3" {...useMySwipeHandlers("section4", "section2", true)}>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.
            </p>
          </BasicSection>
        </div>

        <div id="section4" {...useMySwipeHandlers("section5", "section3", true)}>
          <Cta />
        </div>

        <div id="section5" {...useMySwipeHandlers("", "section4", false)}>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.
            </p>
          </BasicSection>
        </div>

    </>
  );
};

export default Homepage;

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
/*
const ScrollContainer = styled.div`
  min-height: calc(100vh - 6rem);
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
`;

const ScrollArea = styled.div`
  scroll-snap-align: start;
`;*/

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
/** 
          <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
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
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
 */
