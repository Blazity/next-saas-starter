import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="How often do I get updates on which of my customers have moved or sold their home?">
        The real estate data is gathered in real time throughout the day. Each morning you will receive a summary email notifying you of all
        the updates.
      </Accordion>
      <Accordion title="How much does it cost?">
        Our pricing is based on the number of customers you have. You can find our pricing on the pricing page.
      </Accordion>
      <Accordion title="What sort of security measures do you have in place?">
        We use the latest security measures to ensure your data is safe. This includes using Stripe to process payments, two factor
        authentication, and SSL encryption. All our data is stored on Amazon Web Services servers in the United States.
      </Accordion>
      <Accordion title="Do you do anything else with my customer list?">
        Of course not! We only use your customer list to gather real estate data. We do not sell your customer list to anyone else or use it
        for any other purpose.
      </Accordion>
      <Accordion title="How do I get started?">
        You can get started by signing up for an account on the pricing page. You can then begin by syncing with your customers with your
        CRM or uploading a list. You can also setup an onboarding call with us to get started.
      </Accordion>
      <Accordion title="What CRMs do you integrate with?">
        We currently integrate with Service Titan and Hubspot. If you use a different CRM, you can still use our service by uploading a list
        of your customers and we are constantly working to add more integrations.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
