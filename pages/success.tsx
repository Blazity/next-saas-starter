import Page from '../components/Page';
import styled from 'styled-components';

export default function Success() {
  return (
    <Page
      title="🎉 Woohoo! 🎉"
      description="You have successfully subscribed! You should have received an email from reid@ismycustomermoving.com to complete the sign up process."
    >
      <Wrapper>
        <CenteredText>
          <SubTitle>We also highly suggest signing up for a on-boarding meeting with one of our team members!</SubTitle>
        </CenteredText>
        <div className="flex flex-row justify-center items-center">
          <iframe
            src="https://letsmeet.io/jonathanbrewster/imcm-on-boarding-call"
            style={{ minHeight: '700px', minWidth: '100%', width: '100%' }}
            name="booking"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="100%"
            referrerPolicy="unsafe-url"
            allowFullScreen
          />
        </div>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const CenteredText = styled.div`
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.025em;
  color: #374151;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
