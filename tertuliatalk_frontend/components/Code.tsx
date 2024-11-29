import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';
import styled from 'styled-components';
import ClientOnly from 'components/ClientOnly';
import { useClipboard } from 'hooks/useClipboard';

export interface CodeProps {
  code: string;
  language?: Language;
  selectedLines?: number[];
  withCopyButton?: boolean;
  withLineNumbers?: boolean;
  caption?: string;
}

export default function Code({
  code,
  language = 'javascript',
  selectedLines = [],
  withCopyButton = true,
  withLineNumbers,
  caption,
}: CodeProps) {
  const { copy, copied } = useClipboard({
    copiedTimeout: 600,
  });

  function handleCopyClick(code: string) {
    copy(code);
  }

  const copyButtonMarkup = (
    <ClientOnly>
      <CopyButton copied={copied} onClick={() => handleCopyClick(code)}>
        <CopyIcon />
      </CopyButton>
    </ClientOnly>
  );

  return (
    <>
      <Highlight {...defaultProps} theme={undefined} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <CodeWrapper className="code-wrapper" language={language}>
              {withCopyButton && copyButtonMarkup}
              <Pre className={className} style={style}>
                {tokens.map((line, i) => {
                  const lineNumber = i + 1;
                  const isSelected = selectedLines.includes(lineNumber);
                  const lineProps = getLineProps({ line, key: i });
                  const className = lineProps.className + (isSelected ? ' selected-line' : '');

                  return (
                    <Line key={i} {...{ ...lineProps, className }}>
                      {withLineNumbers && <LineNo>{lineNumber}</LineNo>}
                      <LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  );
                })}
              </Pre>
            </CodeWrapper>
            {caption && <Caption>{caption}</Caption>}
          </>
        )}
      </Highlight>
    </>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi">
      <path
        fill="currentColor"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      ></path>
    </svg>
  );
}

const Caption = styled.small`
  position: relative;
  top: -2.2rem;
  word-break: break-word;
  font-size: 1.2rem;
`;

const CopyButton = styled.button<{ copied: boolean }>`
  position: absolute;
  border: none;
  top: 2.4rem;
  right: 2.4rem;
  visibility: hidden;
  background-color: rgba(var(--secondary), 0.1);
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  line-height: normal;
  border-radius: 0.3rem;
  color: rgb(var(--text));
  z-index: 1;
  line-height: 1;

  &::after {
    position: absolute;
    content: 'Copied';
    visibility: ${(p) => (p.copied ? 'visible' : 'hidden')};
    top: 0;
    left: -4rem;
    height: 3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    line-height: 1.5;
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    color: rgb(var(--primary));
    background-color: rgb(var(--secondary));
  }

  &:hover {
    background-color: rgba(var(--secondary), 0.2);
  }
`;

const CodeWrapper = styled.div<{ language: string }>`
  position: relative;
  border-radius: 0.3em;
  margin-top: 4.5rem;
  transition: visibility 0.1s;
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &::after {
    position: absolute;
    height: 2.2em;
    content: '${(p) => p.language}';
    right: 2.4rem;
    padding: 1.2rem;
    top: -2em;
    line-height: 1rem;
    border-radius: 0.3em;
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: inherit;
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    ${CopyButton} {
      visibility: visible;
    }
  }
`;

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: flex;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
