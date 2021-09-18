import { Container } from 'components/Container'
import HeroIllustration from 'components/HeroIllustation'
import styled from 'styled-components'
import { media } from 'utils/media'

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <OverTitle>the most private, non-custodial ethereum wallet</OverTitle>
        <Heading>Reclaim privacy on your Thereum transfers</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </Description>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)`
  display: flex;
  margin-top: 5rem;

  ${media('<=desktop')} {
    margin-top: 2.5rem;
    flex-direction: column;
    align-items: center;
  }
`

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`

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
`

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`

const OverTitle = styled.h2`
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: rgb(var(--primary));
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`

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
`
