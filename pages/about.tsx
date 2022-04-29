import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';



export default function AboutPage() {
  return (
    <Page title="About" description="">
      <Wrapper>
        <Description>
          We started this company to help push forward new web3 enabled infrastructure that allows for investments basically. We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.
          We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.
          We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.
          We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.We started this company to help push forward new web3 enabled infrastructure that allows for investments basically.
        </Description>

      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
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
