import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import { useRef } from 'react';

export default function Cta() {
  return (
    <CtaWrapper id="contact">
      <Container>
        <Stack>
          <OverTitle>Contact Us</OverTitle>
          <SectionTitle>Schedule a Demo, Ask a Question, or Get a Quote Today!</SectionTitle>
          <iframe
            src="https://letsmeet.io/jonathanbrewster/ismycustomermoving-demo"
            // style="border:none; min-height: 700px; width: 1px; min-width: 100%; *width: 100%;"
            style={{
              border: 'none',
              minHeight: '700px',
              // width: "1px",
              minWidth: '80%',
              width: '80%',
            }}
            name="booking"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="100%"
            referrerPolicy="unsafe-url"
            allowFullScreen
          ></iframe>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
