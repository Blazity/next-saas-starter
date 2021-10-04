import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import Code from './Code';
import Quote from './Quote';
import Link from './Link';
import ArticleImage from './ArticleImage';

export default function RichText(props) {
  return (
    <Container>
      <MDXRemote {...props} components={components} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  ${'' /* Opting-out of margin-collapse */}

  flex-direction: column;
  width: 100%;

  section:not(:last-child) {
    margin-bottom: 3.8rem;
  }

  a {
    word-break: break-word;
  }

  /* @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    .remark-highlight {
      width: 100%;
      overflow-x: auto;
    }
  } */

  & > section,
  .footnotes {
    ${'' /* content-visibility: auto; */}
  }

  ol,
  ul {
    font-size: 2.2rem;
    line-height: 3rem;
    margin: 0;
    padding-left: 2.4rem;
    li {
      & > * {
        vertical-align: top;
      }
    }

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 2.2rem;
  line-height: 3rem;
  hanging-punctuation: first;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  & + ul,
  & + li {
    margin-top: -1.5rem !important;
  }
`;

const SecondHeading = styled.h2`
  font-size: 3rem;
  line-height: 3.8rem;
  margin-bottom: 3.8rem;
`;

const ThirdHeading = styled.h3`
  font-size: 2.4rem;
  line-height: 3.4rem;
  margin-bottom: 3.4rem;
`;

const Break = styled.br`
  display: block;
  content: '';
  margin: 0;
  height: 3rem;
`;

const TextHighlight = styled.code`
  display: inline-block;
  padding: 0 0.6rem;
  color: rgb(var(--primary));
  border-radius: 0.4rem;
  background-color: rgb(var(--text));
  font-size: 2rem;
  font-family: inherit;
`;

const components = {
  h2: SecondHeading,
  h3: ThirdHeading,
  p: Paragraph,
  br: Break,
  inlineCode: TextHighlight,
  Image: ArticleImage,
  a: Link,
  Code,
  Quote,
};
