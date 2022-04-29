import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';



export default function WhitePaperPage() {
  return (
    <Page title="White Paper" description="Learn more about how Xchange will work to help you build our your vision of your community.">
      <Wrapper>
        <SectionTitle>Change to gitbook link</SectionTitle>

      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;