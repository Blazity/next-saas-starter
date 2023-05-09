import styled from 'styled-components';
import { media } from 'utils/media';

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 10rem;
  color: #ccc;
  cursor: pointer;
  padding: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  &:disabled {
    color: #333;
    cursor: not-allowed;
  }

  ${media('<=tablet')} {
    font-size: 0rem;
  }
`;

export default ArrowButton;
