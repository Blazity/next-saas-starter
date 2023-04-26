import styled from 'styled-components';

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
`;

export default ArrowButton;
