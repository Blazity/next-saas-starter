import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import LandscapingIllustration from 'components/LandscapingIllustration'; // Assuming you have a relevant illustration
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Premium Landscaping Services</CustomOverTitle>
        <Heading>Transform Your Outdoors with Purplewood Landscaping</Heading>
        <Description>
          Elevate your home with our full-range landscaping services. From custom concrete work to pristine planting, 
          we create the outdoor oasis you've always dreamed of. Expert craftsmanship and sustainable practices are at the heart of what we do.
        </Description>
        <CustomButtonGroup>
          <NextLink href="#request-quote" passHref>
            <Button>
              Schedule Your Landscape Transformation <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="#services" passHref>
            <Button transparent>
              Our Services <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <LandscapingIllustration /> {/* This should be an SVG illustration relevant to landscaping */}
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
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

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
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
