import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(var(--secondary), 0.997);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: var(--z-modal);
  color: rgb(var(--textSecondary));
`;

export default Overlay;
