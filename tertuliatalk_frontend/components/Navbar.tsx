import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from './Button';
import Container from './Container';
import Drawer from './Drawer';
import { HamburgerIcon } from './HamburgerIcon';
import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal';
import { ColumnFlex, RowFlex } from 'pages/weekly-session-schedule';
import Cookies from 'universal-cookie';

const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

const cookies = new Cookies(null, { path: '/' });


export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');
  
  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);
  
  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);
  
  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;
    
    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;
    
    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }
    
    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }
    
    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }
  
  const isNavbarHidden = scrollingDirection === 'down';
  const isTransparent = scrollingDirection === 'none';
  
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  
  useEffect(() => {
    let role = localStorage.getItem('userRole');
    if (role) {
      setRole(role);
    }
  }, []);

  const handleLogout = () => {
    cookies.remove('token');
    localStorage.removeItem('userRole');
    window.location.href = "/"; // this will be changed
  };
  
  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Link href="/" >
              <Image src={`/logo.jpeg`} alt="TertuliaTalk" width={65} height={65} />
            </Link>
          </LogoWrapper>
        </NextLink>
        <NavItemList>
          {items.map((singleItem) => (
            <NavItem key={singleItem.href} {...singleItem} />
          ))}
          {/*
        <ColorSwitcherContainer>
        <ColorSwitcher />
        </ColorSwitcherContainer>
        */}
          {

            role && (
              <>
                <Button onClick={() => setShowModal(!showModal)}>
                  Çıkış yap
                </Button>
                {showModal &&
                  <Modal title={null} onClose={() => setShowModal(false)}>
                    <ColumnFlex>
                      Çıkış yapmak istediğinize emin misiniz?
                      <RowFlex>
                        <Button onClick={handleLogout}>
                          Evet
                        </Button>
                        <Button onClick={() => setShowModal(false)}>
                          Hayır
                        </Button>
                      </RowFlex>
                    </ColumnFlex>
                  </Modal>
                }
              </>
            )
          }
        </NavItemList>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const router = useRouter();
  const { setIsModalOpened } = useNewsletterModalContext();

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  const [role, setRole] = useState<string | null>(null);
  
  useEffect(() => {
    let role = localStorage.getItem('userRole');
    if (role) {
      setRole(role);
    }
  }, []);

  if (outlined) {
    if (!role)
      return <Button onClick={() => router.push("login")}>{title}</Button>;
    else
      return <></>
  }

  return (

    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
  margin-right: 10px;

`;

const NavItemList = styled.div`
  display: flex;
  gap: 0.6rem;
  list-style: none;

  ${media('<desktop')} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
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
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;
