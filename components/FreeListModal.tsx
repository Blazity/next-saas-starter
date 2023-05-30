import React, { useState } from 'react';
import styled from 'styled-components';
// import { EnvVars } from 'env';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import MailSentState from './MailSentState';
import Overlay from './Overlay';

export interface FreeListModalProps {
  onClose: () => void;
}

export default function FreeListModal({ onClose }: FreeListModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  useEscClose({ onClose });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email) {
      try {
        const res = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: 'Email from contact form',
            ...{ name: phone, email, description: zipCode },
          }),
        });

        if (res.status !== 204) {
          setHasErrored(true);
        }
      } catch {
        setHasErrored(true);
        return;
      }

      setHasSuccessfullySentMail(true);
    }
  }

  return (
    <Overlay>
      <Container>
        <Card onSubmit={(event: React.FormEvent<HTMLFormElement>) => onSubmit(event)}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          {hasSuccessfullySentMail && <MailSentState />}
          {!hasSuccessfullySentMail && (
            <>
              <Title>Are you ready to find who is moving in your area?</Title>
              <Row>
                <CustomInput
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Email..."
                  required
                />
                <div style={{ width: '1rem' }} />
                <CustomInput
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number..."
                  required
                />
              </Row>
              <Row>
                <CustomInput
                  value={zipCode}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
                  placeholder="Enter the biggest zip code in your area..."
                  required
                />
                <CustomButton as="button" type="submit" disabled={hasSuccessfullySentMail}>
                  Submit
                </CustomButton>
              </Row>
            </>
          )}
        </Card>
      </Container>
    </Overlay>
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

// const ErrorMessage = styled.p`
//   color: rgb(var(--errorColor));
//   font-size: 1.5rem;
//   margin: 1rem 0;
//   text-align: center;
// `;

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
  color: rgb(var(--text));

  ${media('<=tablet')} {
    width: 100%;
  }
`;
