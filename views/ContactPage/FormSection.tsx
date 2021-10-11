import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { media } from 'utils/media';

export default function FormSection() {
  return (
    <Wrapper>
      <Form>
        <InputGroup>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
        </InputGroup>
        <Textarea as="textarea" placeholder="Enter Your Message..." />
        <Button type="submit">Send Message</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
