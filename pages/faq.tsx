import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import Accordion from 'components/Accordion';



export default function faqPage() {
  return (
    <Page title="FAQ" description="">
    <Wrapper>
      <Accordion title="Q: Who is MobLabs for?">
        MobLabs is for content creators and fans who are looking to build next generation web3 enabled communities.
      </Accordion>
      <Accordion title="Q: How do I participate?">
        You can't yet.
      </Accordion>
    </Wrapper>

    </Page>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;



