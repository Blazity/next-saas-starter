import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Page from 'components/Page';
import Accordion from 'components/Accordion';
import Button from 'components/Button';
import { convertToISODate } from 'utils/formatDate';
import CourseCard from 'views/SessionSchedule/Course';
import { weeksArray } from 'mocks/weeks';
import { getCourses } from 'services/CourseService';
import { Course } from 'types/Course';

export default function FeaturesPage() {
  const [role, setRole] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [weekIndex, setWeekIndex] = useState<number>(0);

  const handleWeekChange = (direction: 'next' | 'prev') => {
    setWeekIndex((prevIndex) => {
      if (direction === 'next' && prevIndex < weeksArray.length - 1) {
        return prevIndex + 1;
      } else if (direction === 'prev' && prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    const roleFromStorage = localStorage.getItem('userRole');
    if (roleFromStorage) setRole(roleFromStorage);

    const fetchCourses = async () => {
      const startDate = weeksArray[weekIndex][0].date;
      const endDate = nextSevenDateFormatter(startDate);
      try {
        const response = await getCourses(startDate, endDate);
        console.log('Courses:', response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [weekIndex]);

  const renderRoleBasedContent = () => {
    if (role === 'SuperAdmin') return <p>SuperAdmin</p>;

    const filteredCourses = (date: string) => {
      return courses.filter(
        (course) => course.startDate.split('T')[0] === convertToISODate(date).split('T')[0]
      );
    };

    return (
      <Wrapper>
        <Header>
          <Session>
            <Button onClick={() => setCourses(courses)}>Bireysel</Button>
            <Button onClick={() => setCourses(courses)}>Toplu</Button>
          </Session>
          <PassWeek>
            <Button onClick={() => handleWeekChange('prev')}>önceki hafta</Button>
            <h1>
  {`Tarih: ${weeksArray[weekIndex][0].date} / ${nextSevenDateFormatter(weeksArray[weekIndex][0].date)}`}
</h1>

            <Button onClick={() => handleWeekChange('next')}>sonraki hafta</Button>
          </PassWeek>
        </Header>
        <Days>
          {weeksArray[weekIndex]?.map((week, index) => (
            <Accordion
              key={index}
              title={week.day}
              subTitle={`Oturum Sayısı: ${filteredCourses(week.date).length}`}
            >
              {filteredCourses(week.date).map((course, index) => (
                <CourseCard key={index} course={course} index={0} />
              ))}
            </Accordion>
          ))}
        </Days>
      </Wrapper>
    );
  };

  return (
    <Page title="Haftalık Oturum Programı">
      <WholeFrame>{renderRoleBasedContent()}</WholeFrame>
    </Page>
  );
}

const nextSevenDateFormatter = (date: string): string => {
  const currentDate = new Date(date); // String formatını Date objesine çevir
  currentDate.setDate(currentDate.getDate() + 7); // 7 gün ekle
  return currentDate.toLocaleDateString(); // Tarihi formatla (MM/DD/YYYY)
};


// Styled Components
const Days = styled.div`
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
`;

const Session = styled.div`
  background-color: rgb(var(--navbarBackground));
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

const PassWeek = styled.div`
  background-color: rgb(var(--navbarBackground));
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WholeFrame = styled.div`
  border-radius: 1rem;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const ColumnFlex = styled.div`
  user-select: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const RowFlex = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
