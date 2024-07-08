import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import React, { useState } from 'react';
import MailchimpSubscribe, { DefaultFormFields } from 'react-mailchimp-subscribe';
import { EnvVars } from 'env';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from 'components/Button';
import CloseIcon from 'components/CloseIcon';
import Container from 'components/Container';
import Input from 'components/Input';
import MailSentState from 'components/MailSentState';
import Overlay from 'components/Overlay';
import NextLink from 'next/link';

export default function SignpSection() {
  return (
        <Container>
            <Card>
                    <Row>
                    <CustomInput
                        placeholder="Enter your email..."
                        required
                    />
                    </Row>
                    <Row>
                    <CustomInput
                        placeholder="Enter your email..."
                        required
                    />
                    </Row>
                    <Row>
                    <CustomButton as="button" type="submit" >
                        Submit
                    </CustomButton>
                    </Row>
            </Card>
        </Container>

  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)`
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CustomInput = styled(Input)`
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;
