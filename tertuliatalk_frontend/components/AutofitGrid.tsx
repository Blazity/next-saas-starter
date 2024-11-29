import styled from 'styled-components';

const AutofitGrid = styled.div`
  --autofit-grid-item-size: 30rem;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0 auto;
`;

export default AutofitGrid;
