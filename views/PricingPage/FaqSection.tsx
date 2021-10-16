import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Eiusmod eu laboris qui minim incididunt et id in elit veniam Lorem nulla ullamco.">
        Voluptate ad aliquip in adipisicing incididunt officia. Aliqua consectetur id commodo fugiat sunt dolor minim. Aliqua ut deserunt
        sit irure tempor esse labore elit commodo pariatur in nisi minim culpa. Exercitation eu in mollit tempor cillum excepteur
        adipisicing cillum do et dolor est deserunt dolor. Deserunt reprehenderit nulla commodo quis et consectetur deserunt ea eiusmod
        reprehenderit aliqua. Cupidatat commodo do ad ullamco ad enim sint sint irure amet culpa. Consequat sit Lorem sint culpa.
      </Accordion>
      <Accordion title="Minim eiusmod aliquip in ea mollit fugiat ullamco veniam enim sint exercitation.">
        Lorem laboris ullamco labore consectetur duis amet excepteur esse labore sunt pariatur do aliqua amet. Enim exercitation labore
        nostrud consectetur veniam eiusmod pariatur do commodo dolore pariatur amet veniam. Irure do et ut dolor quis reprehenderit anim
        aute sint deserunt tempor sunt nostrud. Deserunt et aute non dolor.
      </Accordion>
      <Accordion title="Commodo officia dolore anim occaecat.">
        Enim ea cillum pariatur incididunt incididunt sunt ea exercitation nisi aliquip. Cillum deserunt ut esse Lorem non qui labore labore
        eiusmod magna incididunt ut quis. Nulla excepteur adipisicing ipsum do non occaecat.
      </Accordion>
      <Accordion title="Irure Lorem proident esse enim.">
        Ipsum laboris sit minim occaecat nisi qui. Tempor eiusmod fugiat occaecat labore. Exercitation do cillum cillum laborum velit
        laborum ea magna duis laborum in anim. Enim laboris dolore laboris consectetur enim duis deserunt consequat excepteur ipsum
        excepteur. Non dolor magna et est cillum sint eiusmod sit eiusmod veniam id. Aliqua non non labore amet laborum fugiat ad nostrud ex
        officia exercitation.
      </Accordion>
      <Accordion title="Ea quis consequat sunt sint aute pariatur aliquip minim voluptate.">
        Sint eiusmod aute nulla ut esse sunt fugiat nulla exercitation duis pariatur. Magna anim incididunt magna id quis irure laborum sint
        voluptate tempor esse elit dolore. Elit exercitation pariatur adipisicing aute. Nisi deserunt enim consequat anim adipisicing
        laborum sint occaecat elit. Consequat officia cupidatat magna incididunt nisi in sunt duis reprehenderit ullamco in amet cillum.
        Dolor nisi proident ipsum aute velit aliquip magna fugiat reprehenderit. Enim ex aliqua et velit exercitation reprehenderit veniam
        do eu exercitation ad duis.
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
