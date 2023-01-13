import { styled } from '@linaria/atomic'
import { useState } from 'react'

import logoUrl from '../assets/logo.png'
import { Icon } from './Icon'
import { HStack } from './Stack'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLogoToggle = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeaderSection>
      <HeaderWrapper data-is-menu-open={isMenuOpen}>
        <HStack justify="space-between" align="center">
          <LogoLink href="#intro" onClick={handleLogoToggle}>
            <LogoImage src={logoUrl}></LogoImage>
          </LogoLink>
          <HeaderMenuButton onClick={handleMenuToggle}>
            <Icon icon="menu" />
          </HeaderMenuButton>
        </HStack>

        <NavMenu data-is-menu-open={isMenuOpen}>
          <NavLink onClick={handleLinkClick} href="#intro">
            Home
          </NavLink>
          <NavLink onClick={handleLinkClick} href="#product">
            Product
          </NavLink>
          <NavLink onClick={handleLinkClick} href="#what-we-offer">
            What we offer
          </NavLink>
          <NavLink onClick={handleLinkClick} href="#team">
            Team
          </NavLink>
          <NavLink onClick={handleLinkClick} href="#partners">
            Partners
          </NavLink>
          <NavLink onClick={handleLinkClick} href="#contact">
            Contact
          </NavLink>
        </NavMenu>
      </HeaderWrapper>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-image: linear-gradient(0deg, transparent, var(--color-dark2));
  transition: background-image 0.5s;

  &[data-is-menu-open='true'] {
    background-image: linear-gradient(0deg, transparent, transparent);
  }
`

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--spacing-3);

  @media all and (max-width: 680px) {
    flex-direction: column;
    transition: all 0.5;
    background-color: transparent;

    &[data-is-menu-open='true'] {
      @supports (
          -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%)
        )
        or (backdrop-filter: blur(20px) saturate(160%) contrast(45%)) {
        background-color: rgba(18, 38, 43, 0.2);
        backdrop-filter: blur(20px) saturate(160%) contrast(45%);
        -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%);
      }
    }
  }
`

const LogoImage = styled.img`
  width: 60px;
`

const LogoLink = styled.a`
  outline: none;
  text-decoration: none;
  padding: var(--spacing-2);
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;

  transition: visibility 0s, opacity 0s, height 0s;

  @media all and (max-width: 680px) {
    height: 0;
    flex-direction: column;
    font-size: var(--font-size-6);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s, height 0.3s;

    &[data-is-menu-open='true'] {
      visibility: visible;
      opacity: 1;

      height: calc(100vh - 52px);
    }
  }
`

const NavLink = styled.a`
  outline: none;
  text-decoration: none;
  color: var(--color-secondary);
  padding: var(--spacing-4);
  font-size: var(--font-size-1);
  font-weight: 500;

  @media all and (max-width: 680px) {
    font-size: var(--font-size-5);
    padding: var(--spacing-6) var(--spacing-2);
  }
`

const HeaderMenuButton = styled.button`
  display: none;

  & span {
    font-size: 32px;
  }

  @media all and (max-width: 680px) {
    color: var(--color-secondary);
    outline: none;
    border: none;
    text-decoration: none;
    width: 44px;
    height: 44px;
    background-color: transparent;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--color-green);
    }
  }
`
