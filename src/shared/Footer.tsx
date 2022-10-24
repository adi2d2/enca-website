import styled from '@emotion/styled'

import { Text } from './Text'
import { HStack } from './Stack'

import logoUrl from '../assets/logo.png'

export const Footer = () => {
  return (
    <StyledFooter>
      <Text color="mid2" size="1">
        Copyright {new Date().getFullYear()} Enca Scientific.
        <br />
        All rights reserved
      </Text>
      <HStack justify="center">
        <SoMeLink
          href="https://www.linkedin.com/company/encascientific/about/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </SoMeLink>
      </HStack>
      <HStack justify="end">
        <Logo src={logoUrl} alt="Enca Scientific" />
      </HStack>
    </StyledFooter>
  )
}

const SoMeLink = styled.a`
  color: var(--color-mid2);
  outline: none;
  text-decoration: none;
  width: 44px;
  height: 44px;
  background-color: transparent;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: var(--color-dark2);
  }
`

const Logo = styled.img`
  width: 80px;
`

const StyledFooter = styled.footer`
  display: flex;
  padding: var(--spacing-3) 0;
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid var(--color-dark2);
  gap: var(--spacing-1);
  align-items: center;
  justify-content: space-between;

  @media all and (min-width: 600px) {
    & > * {
      flex: 1;
    }
  }
`
