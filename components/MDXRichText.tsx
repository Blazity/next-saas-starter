import { Language } from 'prism-react-renderer';
import styled from 'styled-components';
import { Components, TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { media } from 'utils/media';
import ArticleImage from './ArticleImage';
import Code from './Code';
import Link from './Link';
import Quote from './Quote';

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

  ${media('<=desktop')} {
    .remark-highlight {
      width: 100%;
      overflow-x: auto;
    }
  }

  & > section,
  .footnotes {
    ${'' /* content-visibility: auto; */}
  }

  ol,
  ul {
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin: 0;
    padding-left: 2.4rem;
    li {
      & > * {
        vertical-align: top;
      }
    }

    &:not(:last-child) {
      margin-bottom: 2.7rem;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 2.7rem;
  hanging-punctuation: first;

  &:not(:last-child) {
    margin-bottom: 2.7rem;
  }

  & + ul,
  & + li {
    margin-top: -1.5rem !important;
  }
`;

const SecondHeading = styled.h2`
  font-size: 2.5rem;
  line-height: 3.75rem;
  margin-bottom: 3.75rem;
`;

const ThirdHeading = styled.h3`
  font-size: 2.2rem;
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
  color: rgb(var(--textSecondary));
  border-radius: 0.4rem;
  background-color: rgba(var(--primary), 0.8);
  font-size: 1.6rem;
  font-family: inherit;
`;

const components = {
  h2: SecondHeading,
  h3: ThirdHeading,
  p: Paragraph,
  br: Break,
  code: TextHighlight,
  Image: ArticleImage,
  Link,
  code_block: (props: { value?: string; language?: string }) => {
    return <Code code={props?.value || ''} language={props?.language as Language} />;
  },
  Code: (args: any) => {
    const selectedLines: string = args.selectedLines;
    const lines = selectedLines?.split(',').map((x) => Number(x));
    return <Code {...args} selectedLines={lines} />;
  },
  Quote,
  ArticleImage,
};

export default function RichText(props: { content: TinaMarkdownContent | TinaMarkdownContent[] }) {
  return (
    <Container>
      <TinaMarkdown content={props.content} components={components as Components<{}>} />
    </Container>
  );
}
