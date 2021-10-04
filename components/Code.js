import { useClipboard } from 'hooks/useClipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useState } from 'react';
import styled from 'styled-components';
// import Icon from 'components/icons/Icon';
// import CopyIcon from './icons/CopyIcon';
import ClientOnly from 'components/ClientOnly';

export default function Code({ code, language, selectedLines = [], withCopyButton = true, withLineNumbers, caption }) {
  const nullAwareLanguage = language || 'js';
  const { copy, copied } = useClipboard({
    copiedTimeout: 600,
  });

  function handleCopyClick(code) {
    copy(code);
  }

  const copyButtonMarkup = <ClientOnly>{/* <CopyButton copied={copied} onClick={() => handleCopyClick(code)} /> */}</ClientOnly>;

  return (
    <>
      <Highlight {...defaultProps} theme={null} code={code} language={nullAwareLanguage}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <CodeWrapper className="code-wrapper" language={nullAwareLanguage}>
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

const Caption = styled.small`
  position: relative;
  top: -22px;
  word-break: break-word;
`;

// const CopyButton = styled(CopyIcon)`
//   position: absolute;
//   top: ${(p) => p.theme.spacings.sm}px;
//   right: ${(p) => p.theme.spacings.sm}px;
//   visibility: hidden;
//   background-color: var(--overlay);
//   cursor: pointer;
//   width: 30px;
//   height: 30px;
//   opacity: 0.7;
//   line-height: normal;
//   border-radius: 3px;
//   color: var(--text);
//   z-index: 1;

//   &::after {
//     position: absolute;
//     content: 'Copied';
//     visibility: ${(p) => (p.copied ? 'visible' : 'hidden')};
//     top: 0;
//     left: -25px;
//     height: 30px;
//     border-radius: 3px;
//     padding: 5px;
//     color: inherit;
//     background-color: var(--overlay);
//   }

//   &:hover {
//     background-color: var(--overlay-lighter);
//   }
// `;

const CodeWrapper = styled.div`
  position: relative;
  border-radius: 0.3em;
  margin-top: 45px;
  transition: visibility 0.1s;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &::after {
    position: absolute;
    height: 2.2em;
    content: '${(p) => p.language}';
    right: 2.4rem;
    padding: 1.2rem;
    top: -2em;
    line-height: 10px;
    border-radius: 0.3em;
    font-size: 4.8rem;
    text-transform: uppercase;
    background-color: inherit;
    font-weight: bold;
    text-align: center;
  }
`;
/* 
  &:hover { 
    ${CopyButton} {
      visibility: visible;
    }
  } */

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
