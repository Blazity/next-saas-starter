import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import { nativePrograms } from 'mocks/programs';
import { Program } from '../../mocks/programs';
import { Times, weeksArray } from 'mocks/weeks';
import { Days as EnumDays } from 'types/enums';
import { CreateCourse } from 'types/Course';
import { addCourse } from 'services/CourseService';

export default function MeetingAddForm({ setPrograms }: { setPrograms: any }) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = async (data: CreateCourse) => {
  
    console.log(data);

    //const response = await addCourse(data);
  
  
  
  
    setStatus(true);
  
    // use real api to post data
    formRef.current?.reset();
    setStatus(false);
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <TitleWrapper>
        <Label htmlFor="title">Başlık</Label>
        <Input
          id="title"
          {...register('title', { required: true })}
        />
        {errors.title && <ErrorMessage>Başlık zorunludur</ErrorMessage>}
      </TitleWrapper>

      <DescriptionWrapper>
        <Label htmlFor="description">Açıklama</Label>
        <TextArea
          id="description"
          {...register('description', { required: true })}
        />
        {errors.description && <ErrorMessage>Açıklama zorunludur</ErrorMessage>}
      </DescriptionWrapper>

      <TimeWrapper>
        <Label htmlFor="duration">Saat</Label>
        <Input
          type="time"
          id="duration"
          {...register('duration', { required: true })}
        />
        {errors.time && <ErrorMessage>Saat zorunludur</ErrorMessage>}
      </TimeWrapper>

      <QuotaWrapper>
        <Label htmlFor="maxParticipant">Kontenjan</Label>
        <Input
          type="number"
          id="maxParticipant"
          {...register('maxParticipant', { required: true, min: 1 })}
        />
        {errors.quota && <ErrorMessage>Kontenjan zorunludur ve en az 2 olmalıdır</ErrorMessage>}
      </QuotaWrapper>

      <Button type="submit" disabled={status}>
        {status ? "Ders Ekleniyor..." : "Ders Ekle"}
      </Button>
    </FormWrapper>
  );
  // this form can be updated according to the requirements of the program features
};


const FormWrapper = styled.form`
background-color: #232c35;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuotaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-left: 0.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  color: #fafafa;
  border: none;
  outline: none;
  background: none;
  padding: 12px;
  border-radius: 99999px;
  outline: none;
  padding: 0.6rem;
  border: 1px solid #ccc;
  font-size: 1.4rem;
`;

const TextArea = styled.textarea`
  outline: none;
  background: none;
  color: #fafafa;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
  resize: vertical;
  max-height: 80px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;
