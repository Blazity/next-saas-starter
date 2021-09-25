import Button from 'components/Button';
import { Container } from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import styled from 'styled-components';
import { media } from 'utils/media';
import NextLink from 'next/link';
import OverTitle from 'components/OverTitle';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the most private, non-custodial ethereum wallet</CustomOverTitle>
        <Heading>Reclaim privacy on your Thereum transfers</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </Description>
        <ButtonGroup>
          <NextLink href="#early-access" passHref>
            <Button>
              Request early access <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Whitepaper <span>&rarr;</span>
            </Button>
          </NextLink>
        </ButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  margin-top: 5rem;

  ${media('<=desktop')} {
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  ${media('<=tablet')} {
    & > * {
      width: 100%;
    }

    & > *:not(:last-child) {
      margin-right: 0rem;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
