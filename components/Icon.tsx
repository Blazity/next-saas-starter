import React, { HTMLProps, Ref } from 'react'
import styled from 'styled-components'

export type IconProps = HTMLProps<HTMLButtonElement> & { _ref?: Ref<HTMLButtonElement> }

// TODO any because styled-component still has children prop type bug and I won't waste my time on it #sigma #grindset
export default function Icon({ _ref, ...rest }: any) {
  return <IconWrapper {...rest} {...(_ref && { ref: _ref })} />
}

const IconWrapper = styled.button`
  border: none;
  background-color: transparent;
  width: 4rem;
`
