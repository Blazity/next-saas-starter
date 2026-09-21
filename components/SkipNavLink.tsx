import styled from 'styled-components';

export default function SkipNavLink() {
  return <StyledSkipLink href="#main-content">Skip to main content</StyledSkipLink>;
}

const StyledSkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 9999;
  padding: 1rem 2rem;
  background: rgb(var(--primary));
  color: rgb(var(--textSecondary));
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0 0 0.6rem 0;

  &:focus {
    position: fixed;
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;
