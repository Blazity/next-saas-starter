import { EnvVars } from 'env';
import { Course, CreateCourse } from 'types/Course';
import { convertToISODate } from 'utils/formatDate';

const addCourse = async (course: CreateCourse) => {
  try {
    const response = await fetch(`${EnvVars.API_URL}/api/Course/course-add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        request: course,
      }),
    });
    console.log('Course add response:', response);
  } catch (error) {
    console.log('Course add error:', error);
  }
};

export const getCourses = async (startDate: string, endDate: string) => {
  try {
    const response = await fetch(
      `${EnvVars.API_URL}/api/Course/get-by-date-range?startDate=${convertToISODate(startDate)}&endDate=${convertToISODate(endDate)}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { addCourse };
