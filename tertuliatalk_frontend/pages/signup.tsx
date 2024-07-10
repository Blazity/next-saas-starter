import styled from 'styled-components';
import Page from 'components/Page';
import SignpSection from 'views/SignupPage/Signupsection';

export default function PricingPage() {
  return (
    <Page title="Kayıt ol" >
      <Wrapper>
        <SignpSection/>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
