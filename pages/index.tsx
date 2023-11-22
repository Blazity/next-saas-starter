import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Sortify - Ensure compliance with the GDPR and the CCPA. Sortify is a privacy management software that helps you to comply with the GDPR and the CCPA."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/nexxo/compliance.svg" title="Accélère la conformité de votre organisation" overTitle="Simple" id="why">
            <p>
              La Loi 25 du Québec apporte des défis de conformité uniques. Sortify est spécialement construit pour s&apos;aligner avec ces
              exigences, fournissant aux PME un chemin rapide vers la conformité en leur permettant de facilement repérer les données
              personelles qu&apos;elles possède et de prendre action.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/nexxo/connected.svg" title="S'intègre à Microsoft 365" overTitle="Intégré" reversed>
            <p>
              Conçu en pensant aux gestionnaires d&apos;entreprise, Sortify est polyvalent en s&apos;intégrant nativement aux plateformes
              Microsoft 365, vous permettant d&apos;obtenir automatiquement une compréhension fine des données personelles de votre
              organisation.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/nexxo/chronometer.svg" title="Résultats en quelques minutes" overTitle="Rapide">
            <p>
              Sortify s&apos;installe en quelques minutes et vous permet de rapidement d&apos;obtenir un inventaire de données personnelles
              en un délais considérablement réduit
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
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
