import styled from 'styled-components';
import { media } from 'utils/media';

export interface ThreeLayersCircleProps {
  baseColor: string;
  secondColor: string;
}

const ThreeLayersCircle = styled.div<ThreeLayersCircleProps>`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 5rem;
  height: 5rem;
  border-radius: 100rem;
  background: rgb(${(p) => p.baseColor});
  z-index: 0;
  transition: background 0.2s;

  ${media('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }

  &:after {
    width: 4rem;
    height: 4rem;
    background: rgb(${(p) => p.secondColor});
    z-index: -2;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    background: rgb(${(p) => p.baseColor});
  }
`;

export default ThreeLayersCircle;
