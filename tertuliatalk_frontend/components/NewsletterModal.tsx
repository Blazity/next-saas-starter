import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import Overlay from './Overlay';
import { signIn } from 'services/AuthService';
import Cookies from 'universal-cookie';
import Router, { useRouter } from 'next/router';

interface NewsletterModalProps {
  onClose: () => void | null;
}

interface IFormInput {
  email: string;
  password: string;
}

const cookies = new Cookies(null, { path: '/' });

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [signInError, setSignInError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  useEscClose({ onClose });

  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();
    window.addEventListener('scroll', disableScroll);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('scroll', disableScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);


  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const { email, password } = data;

    if (email && password) {
      try {
        const response = await signIn(email, password);

        const { authToken, accessTokenExpireDate, role } = response;
        
        console.log('Login successful:', { authToken, accessTokenExpireDate, role });
        cookies.set('token', authToken, { path: '/', expires: new Date(accessTokenExpireDate) });

        if (role) {
          localStorage.setItem("userRole", role);
          Router.push('/');
        } else {
          console.log("Sign-in failed1");
          setSignInError("Hatalı email veya şifre, lütfen tekrar deneyin.");
        }

      } catch (error) {
        console.log("Sign-in failed");
        setSignInError("Hatalı email veya şifre, lütfen tekrar deneyin.");
      }

    };

    // if (email && password) {

    //   const result = await signIn(email, password);
    //   if (result) {

    //     if (result.role === "Teacher") {
    //       console.log("succcess")

    //       const userRole = localStorage.setItem("userRole", result.role);

    //       setRole(result.role);

    //       window.location.reload();

    //     } else if (result.role === "Student") {

    //       console.log("succcess")

    //       const userRole = localStorage.setItem("userRole", result.role);

    //       setRole(result.role);
    //       window.location.reload();

    //     }
    //     else if (result.role === "SuperAdmin") {

    //       console.log("succcess")

    //       const userRole = localStorage.setItem("userRole", result.role);

    //       setRole(result.role);
    //       window.location.reload();

    //     }

    //   } else {
    //     console.log("Sign-in failed");
    //   }
    // }
  }

  return (
    <Overlay>
      <Container>
        <Card onSubmit={handleSubmit(onSubmit)}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          <>
            <Title>Giriş yap</Title>
            <Row>
              <CustomInput
                {...register("email", {
                  required: "Email adresinizi giriniz...",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Geçerli bir email adresi giriniz"
                  }
                })}
                placeholder="Email adresinizi giriniz..."

              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </Row>
            <Row>
              <CustomInput
                type="password"
                {...register("password", {
                  required: "Şifrenizi giriniz...",
                  minLength: { value: 3, message: "Şifreniz en az 3 karakter olmalıdır" }
                })}
                placeholder="Şifrenizi giriniz..."
              />
              {errors.password && <Error>{errors.password.message}</Error>}
            </Row>
            {signInError && <Error>{signInError}</Error>}
            <Row>
              <CustomButton as="button" type="submit">
                Submit
              </CustomButton>
            </Row>
          </>
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
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

const Error = styled.div`
text-align: center;
  color: red;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
