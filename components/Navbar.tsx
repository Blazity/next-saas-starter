import styled from 'styled-components'
import Logo from './Logo'
import NextLink from 'next/link'
import React, { useRef, useState } from 'react'
import { Container } from './Container'
import media from 'css-in-js-media'
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition'
import { useRouter } from 'next/router'

type ScrollingDirections = 'up' | 'down' | 'none'
type NavItemProps = React.PropsWithChildren<{ href: string; outlined?: boolean }>
type NavbarContainerProps = { hidden: boolean; transparent: boolean }

export default function Navbar() {
  const router = useRouter()
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none')

  let lastScrollY = useRef(0)
  const lastRoute = useRef('')
  const stepSize = useRef(50)

  // TODO: hidden with intersection observer

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50)

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath
    const hasRouteChanged = routerPath !== lastRoute.current

    if (hasRouteChanged) {
      lastRoute.current = routerPath
      setScrollingDirection('none')
      return
    }

    const currentScrollY = currPos.y
    const isScrollingUp = currentScrollY > lastScrollY.current
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY)
    const hasScrolledWholeStep = scrollDifference >= stepSize.current
    const isInNonCollapsibleArea = lastScrollY.current > -50

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none')
      lastScrollY.current = currentScrollY
      return
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY
      return
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down')
    lastScrollY.current = currentScrollY
  }

  const isNavbarHidden = scrollingDirection === 'down'
  const isTransparent = scrollingDirection === 'none'

  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavItemList>
          <NavItem href="#why-us">Why Logoipsum</NavItem>
          <NavItem href="/features">Logoipsum Features</NavItem>
          <NavItem href="/help">Help Center</NavItem>
          <NavItem href="/contact" outlined>
            Contact Us
          </NavItem>
        </NavItemList>
      </Content>
    </NavbarContainer>
  )
}

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
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p) => (p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) => (p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)')};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 1rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem;
  width: 100%;
  height: 8rem;

  box-shadow: ${(p) => (p.transparent ? 'none' : 'var(--shadow-md)')};
  background-color: ${(p) => (p.transparent ? 'transparent' : 'var(--background)')};
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  /* ${media('<=desktop')} {
  } */
`

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
