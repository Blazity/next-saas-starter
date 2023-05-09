import styled from 'styled-components';
import { media } from 'utils/media';

// const AutofitGrid = styled.div`
//   --autofit-grid-item-size: 30rem;

//   display: grid;
//   grid-gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
//   margin: 0 auto;
// `;

const AutofitGrid = styled.div`
  --autofit-grid-item-size: 30rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;

  ${media('<=tablet')} {
    display: grid;
    grid-auto-rows: 40rem; /* or set this to the desired height of the grid items */
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 12rem; /* set the gap to the desired value for all rows */
  }

  ${media('<=phone')} {
    display: grid;
    grid-auto-rows: 50rem; /* or set this to the desired height of the grid items */
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 12rem; /* set the gap to the desired value for all rows */
  }
`;

export default AutofitGrid;
