import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import Container from './Container';
import SectionTitle from './SectionTitle';

export interface PageProps {
  title: string;
  description?: string;
}

export default function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Wrapper>
        <HeaderContainer>
          <Container>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--secondary));
  min-height: 40rem;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
