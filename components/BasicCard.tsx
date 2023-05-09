import NextImage from 'next/image';
import styled from 'styled-components';
import { media } from 'utils/media';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BasicCard({ title, description, imageUrl }: BasicCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={128} height={128} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  ${media('<=tablet')} {
    font-size: 1.4rem;
  }
  ${media('<=phone')} {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  opacity: 0.6;
  ${media('<=tablet')} {
    font-size: 1.4rem;
  }
  ${media('<=phone')} {
    font-size: 1.2rem;
  }
`;
