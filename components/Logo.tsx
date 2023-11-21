import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return <Title>Sortify</Title>;
}

const Title = styled.h1`
  font-size: 3rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
