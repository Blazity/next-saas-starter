import { ImBin } from "react-icons/im";
import * as React from 'react';
import styled from 'styled-components';
import RichText from 'components/RichText';
import Button from 'components/Button';
import { Roles } from "types/enums";
import { set } from "lodash";
import { nativePrograms } from "mocks/programs";

type Program = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  link: string;
  isCommunity: boolean;
  isActive: boolean;  /* -> this prop is used to show the active programs 
                            if we create cron jobs that run every hour in the backend, we can handle this.
                        */
};

type User = {
  id: string;
  role: string;
}

const user: User = {
  id: '1',
  role: Roles.INSTRUCTOR,
}

export default function TeacherMeeting({ index, program, setPrograms }: { index: number, program: Program, setPrograms: any }) {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:3000/example.pdf';
    link.download = 'example';
    link.click();
  }

  const deleteProgram = () => {
    nativePrograms.splice(index, 1);
    setPrograms([...nativePrograms]);
    // use real api to delete program
    console.log(`Program with id ${program.id} is deleted`);
  }

  return (
    <Meetings key={index}>
      <Container>
        <FlexBetween>
          <TitleDescription>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </TitleDescription>
          <ColumnFlex>
            <FlexAlignCenter>
              <Cursor >
                <ImBin color="black" size={25} onClick={deleteProgram} />
              </Cursor>
              <RichText>{program.time} /&nbsp;</RichText>
              <RichText>{program.duration}</RichText>
            </FlexAlignCenter>
            <FlexAlignCenter>
              <Location>{program.location}</Location>
              <CustomCircle>2/4</CustomCircle>
            </FlexAlignCenter>
          </ColumnFlex>
        </FlexBetween>
        <FlexCenterBetween>
          <Button onClick={downloadPdf} disabled={!program.isActive}>
            Metaryali indir
          </Button>
          <Button disabled={!program.isActive}>
            Randevu Oluştur
          </Button>
        </FlexCenterBetween>
      </Container>
    </Meetings>
  )
}

const Meetings = styled.div`
  background-color: #f5f5dc;
  border-radius: 1rem;
  border-bottom: 1px solid #2c3540;
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const Container = styled.div`
`;

const FlexBetween = styled.div`
padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleDescription = styled.div`
font-weight: bold;
color: black;  
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const ColumnFlex = styled.div`
gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const FlexAlignCenter = styled.div`
gap: 1rem;
  color: black;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
  }
  strong {
    margin-left: 0.5rem;
  }
`;

const Location = styled.strong`
color: black;
  margin-top: 0.5rem;
`;


const FlexCenterBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 45px;
  overflow: hidden;
`;

const CustomCircle = styled.div`
color: white;
font-weight: bold;
display: flex;
justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fd5221;
`;

export const Cursor = styled.div`
user-select: none;
cursor: pointer;
`;

