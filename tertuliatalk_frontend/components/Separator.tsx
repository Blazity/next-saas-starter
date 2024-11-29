import styled from 'styled-components';
import { media } from 'utils/media';

const Separator = styled.div`
  margin: 12.5rem 0;
  border: 1px solid rgba(var(--secondary), 0.025);
  height: 0px;

  ${media('<=tablet')} {
    margin: 7.5rem 0;
  }
`;

export default Separator;
