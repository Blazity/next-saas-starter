import styled from 'styled-components';
import React, { useState } from 'react';
import { media } from 'utils/media';
import Button from 'components/Button';
import Container from 'components/Container';
import Input from 'components/Input';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <Container>
      <Card>
        <Row>
          <a>Google Icon (google ile kayıt ol)</a>
        </Row>
        <Row>
          <CustomInput
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Email adresinizi giriniz..."
            required
          />
        </Row>
        <Row>
          <CustomInput
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder="Şifrenizi giriniz..."
            required
          />
        </Row>
        <Row>
          <CustomButton as="button" type="submit" onClick={handleButtonClick}>
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
