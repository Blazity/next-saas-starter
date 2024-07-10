import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import * as React from 'react';
import Accordion from 'components/Accordion';
import Button from 'components/Button';
import RichText from 'components/RichText';


export default function FeaturesPage() {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Page title="Haftalık oturum Programı">
      
      {/*<FormSection/>*/}

      <WholeFrame>


      <Wrapper>
        <Header>
          <Session>

          <Button>Bireysel</Button>
          <Button>Toplu</Button>

          </Session>
          <PassWeek>
            <Button>önceki hafta</Button>
            <RichText>Tarih</RichText>
            <Button>sonraki hafta</Button>


          </PassWeek>

        </Header>

        <Days>
          <Accordion title="Salı 09.07">
            <Meetings>
            </Meetings>
            <Meetings>
            </Meetings>
          </Accordion>

          <Accordion title="Çarşamba 10.07">
            <Meetings>
            </Meetings>
            <Meetings>
            </Meetings>
          </Accordion>

          <Accordion title="Perşemde 11.0">
            <Meetings>
            </Meetings>
            <Meetings>
            </Meetings>
          </Accordion>

          <Accordion title="Cuma 12.07">
            <Meetings>
            </Meetings>
            <Meetings>
            </Meetings>
          </Accordion>
        </Days>
      </Wrapper>
      </WholeFrame>
    </Page>
  );
}


const Days = styled.div`

    display: flex;
    background-color: #f5f5dc;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
      gap: 1rem;

`;

const Header = styled.div`

    display: flex;
    background-color: #f5f5dc;
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
`;

const Session = styled.div`
  background-color: #0FE728;
  width: 98%;
  height: 6rem;
  margin: 1rem;
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;  /* Butonları dikeyde ortalamak için */
`;

const PassWeek = styled.div`
  background-color: #0FE728;
  width: 98%;
  height: 6rem;
  padding-top: 0rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;





const Meetings = styled.div`
    background-color: #13AA25;

    width:100%;
    height:15rem;
    margin-top: 1rem;

  
`;







const WholeFrame = styled.div`
    background-color: #f4a460;

    width:100%;
    height:100%;

  }
`;



const Wrapper = styled.div`
    background-color: #ff0;

  & > *:not(:first-child) {
    margin-top: 1rem;

  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
