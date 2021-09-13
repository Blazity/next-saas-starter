import styled from 'styled-components'
import Logo from './Logo'
import NextLink from 'next/link'
import React from 'react'
import { Container } from './Container'

export default function Navbar() {
  return (
    <Container>
      <NavbarContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavItemList>
          <NavItem href="#why-us">Why Blank</NavItem>
          <NavItem href="/features">What blank offers</NavItem>
          <NavItem href="#how-it-works">How it works</NavItem>
          <NavItem href="#token" outlined>
            Token Metrics
          </NavItem>
        </NavItemList>
      </NavbarContainer>
    </Container>
  )
}

type NavItemProps = React.PropsWithChildren<{ href: string; outlined?: boolean }>

function NavItem({ href, children, outlined, ...rest }: NavItemProps) {
  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref {...rest}>
        <a>{children}</a>
      </NextLink>
    </NavItemWrapper>
  )
}

const NavItemList = styled.div`
  display: flex;
  list-style: none;
`

const LogoWrapper = styled.div`
  margin-right: auto;
`

const NavItemWrapper = styled.li<Partial<NavItemProps>>`
  background-color: ${(p) => (p.outlined ? 'rgb(var(--primary))' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  line-height: 2;
  font-weight: 600;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text))')};
    text-decoration: none;
    padding: 1rem 1.5rem;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem 0;
`
