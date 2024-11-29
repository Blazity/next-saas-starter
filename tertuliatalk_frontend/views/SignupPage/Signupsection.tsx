import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { media } from 'utils/media';
import Button from 'components/Button';
import Container from 'components/Container';
import Input from 'components/Input';
import { getWeatherForecast } from 'services/weatherForecastService';
import { getUserData,signIn, signUp } from 'services/AuthService';
import Logo from '../../components/Logo';
import { useRouter } from 'next/router';
import { da } from 'date-fns/locale';
import { set } from 'lodash';

export default function SignupSection() {
  const [name, setName] = useState<string >("");
  const [email, setEmail] = useState<string >("");
  const [password, setPassword] = useState<string >("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exampleData, setExampleData] = useState<[] | null>(null)
  const router = useRouter();

  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (email && password) {
      setIsLoading(true);
      try {
        const res = await signUp(name, email, password);
        console.log("data from backend: ", res); // login success
        router.push('/login');
      }
      catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setExampleData(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Card>

        <Row>
          {
            exampleData ? (
              exampleData?.map((data: any, index: number) => (
                <DataWrapper key={index}>
                  <p>{data.name}</p>
                  <p>{data.email}</p>
                </DataWrapper>
              ))
            ) : (
              <h1></h1>
            )
          }
        </Row>
        <Row>
          <CustomInput
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="Adinizi giriniz..."
            required
          />
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
          <CustomButton as="button" type="submit" onClick={handleButtonClick} disabled={isLoading}>
            {isLoading ? 'Yükleniyor...' : "Kayıt Ol"}
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
  color: white;
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  border: 1px solid gray;
  border-radius: 0.6rem;
  width: 100%;
  `;