import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>canım istese ödememi geri alabilir miyim?</SectionTitle>
      <Accordion title="Eiusmod eu laboris qui minim incididunt et id in elit veniam Lorem nulla ullamco.">
        Voluptate ad aliquip in adipisicing incididunt officia. Aliqua consectetur id commodo fugiat sunt dolor minim. Aliqua ut deserunt
        sit irure tempor esse labore elit commodo pariatur in nisi minim culpa. Exercitation eu in mollit tempor cillum excepteur
        adipisicing cillum do et dolor est deserunt dolor. Deserunt reprehenderit nulla commodo quis et consectetur deserunt ea eiusmod
        reprehenderit aliqua. Cupidatat commodo do ad ullamco ad enim sint sint irure amet culpa. Consequat sit Lorem sint culpa.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
