import React from 'react';
import styled from 'styled-components';

interface QuoteProps {
  content: string;
  author: string;
  cite: string;
}

export default function Quote({ content, author, cite }: QuoteProps) {
  return (
    <Container>
      <Blockquote {...(cite && { cite })}>{content}</Blockquote>
      <Caption>— {author}</Caption>
    </Container>
  );
}

const Container = styled.figure`
  border-left: 1px solid rgb(var(--secondary));
  padding: 3rem;
  quotes: ${`"\\201c" "\\201d" "\\2018" "\\2019"`};
  color: rgb(var(--secondary));
  margin-bottom: 3.7rem;

  &::before {
    content: open-quote;
    font-size: 8em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
    opacity: 0.6;
    font-family: arial, sans-serif;
  }
`;

const Blockquote = styled.blockquote`
  color: rgb(var(--text));
  display: inline;
  font-size: 2.2rem;
  line-height: 3rem;
  font-style: italic;
  hanging-punctuation: first;
`;

const Caption = styled.figcaption`
  color: rgb(var(--text));
  display: block;
  font-size: 1.6rem;
  margin-top: 2.5rem;
`;
