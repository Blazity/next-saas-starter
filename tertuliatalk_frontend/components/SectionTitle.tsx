import styled from 'styled-components';
import { media } from 'utils/media';

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 4.6rem;
  }
`;

export default SectionTitle;
