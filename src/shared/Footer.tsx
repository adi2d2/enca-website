import styled from '@emotion/styled'

import { Text } from './Text'
import logoUrl from '../assets/logo.png'

export const Footer = () => {
  return (
    <StyledFooter>
      <Text color="mid2" size="1">
        Copyright {new Date().getFullYear()} Enca Scientific.
        <br />
        All rights reserved
      </Text>
      <Logo src={logoUrl} alt="Enca Scientific" />
    </StyledFooter>
  )
}

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
  gap: var(--spacing-4);
  align-items: center;
  justify-content: space-between;
`
