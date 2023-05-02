import { InferGetStaticPropsType } from 'next';
// import styled from 'styled-components';
// import ArticleCard from 'components/ArticleCard';
// import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
// import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page
      title="Coming Soon!"
      description="From marketing tips, success stories, and much more, come back shortly to get resources and insight to help grow your business!"
    >
      {/* <CustomAutofitGrid>
        {posts.map((singlePost, idx) => (
          <ArticleCard
            key={singlePost.slug}
            title={singlePost.meta.title}
            description={singlePost.meta.description}
            imageUrl={singlePost.meta.imageUrl}
            slug={singlePost.slug}
          />
        ))}
      </CustomAutofitGrid> */}
    </Page>
  );
}

// const CustomAutofitGrid = styled(AutofitGrid)`
//   --autofit-grid-item-size: 40rem;

//   ${media('<=tablet')} {
//     --autofit-grid-item-size: 30rem;
//   }

//   ${media('<=phone')} {
//     --autofit-grid-item-size: 100%;
//   }

//   .article-card-wrapper {
//     max-width: 100%;
//   }
// `;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
