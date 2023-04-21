import styled from 'styled-components';

export default function HeroIllustration() {
  return <img src="/heroimage.png" alt="Description of the image" style={{ background: 'transparent' }} />;
}

const HeroImage = styled.img`
  display: flex;
  align-items: center;
  background: transparent;
  background-repeat: no-repeat;
`;
