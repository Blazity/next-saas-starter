import * as React from 'react';
import styled from 'styled-components';
import RichText from 'components/RichText';
import Button from 'components/Button';
import { Course } from "types/Course";



export default function CourseCard({ index, course }: { index: number, course: Course }) {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = course.documentUrl;
    link.download = 'example';
    link.click();
  }

  const today = new Date().toISOString().split('T')[0];
  const utcDateTimeString = `${today}T${course.startDate.split('T')[1]}`;

  const utcDate = new Date(utcDateTimeString);
  course.startDate = utcDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Meetings key={index}>
      <Container>
        <FlexBetween>
          <TitleDescription>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </TitleDescription>
          <ColumnFlex>
            <FlexAlignCenter>
              <RichText>{`${parseInt(course.duration.split(':')[0], 10)} Saat`} /&nbsp;</RichText>
              <RichText>{course.startDate}</RichText>
            </FlexAlignCenter>
            <FlexAlignCenter>
              <Location>{course.instructor.name}</Location>
              <CustomCircle>{`${course.participants}/${course.maxParticipants}`}</CustomCircle>
            </FlexAlignCenter>
          </ColumnFlex>
        </FlexBetween>
        <FlexCenterBetween>
          <Button onClick={downloadPdf} disabled={course.status === 'Finished' || course.documentUrl === null}>
            Metaryali indir
          </Button>
          <Button disabled={course.status === 'Finished'}>
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

