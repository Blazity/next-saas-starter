import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Collapse from './Collapse';
import RichText from './RichText';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h3`
  font-size: 2rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);
`;

const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: normal;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
