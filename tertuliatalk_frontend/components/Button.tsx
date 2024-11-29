import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean; disabled?: boolean }>;

const Button = styled.button<ButtonProps>`
  user-select: none;
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : 'rgb(var(--primary))')};
  padding: 1rem 1.8rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 1rem;
  color: white;
  border: none;
  background-color: #fd5221;
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: ${(p) => (p.disabled ? 'none' : 'scale(1.01)')};
  }
`;

export default Button;
