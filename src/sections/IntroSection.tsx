import styled from '@emotion/styled'

import { Section, Heading, Paragraph, VStack, AnchorButton } from '../shared'

export const IntroSection = () => {
  return (
    <StyledSection id="intro">
      <Ball />
      <StyledVStack gap="3" align="center">
        <Heading size="9" align="center" weight="thin" color="light">
          <strong>Enca</strong> Scientific
        </Heading>
        <Paragraph align="center" color="secondary">
          Sustainable microencapsulation,
          <br />
          one droplet at a time
        </Paragraph>
        <StyledButton emphasys="outline" href="#product">
          Learn More
        </StyledButton>
      </StyledVStack>
    </StyledSection>
  )
}

const StyledButton = styled(AnchorButton)`
  margin-top: var(--spacing-7);
`

const Ball = styled.div`
  height: 40vh;
  width: 120%;
  left: -10%;
  margin-bottom: 100px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    min-width: 800px;
    position: absolute;
    bottom: 0;
    background-color: var(--color-green);
    aspect-ratio: 1/1;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledVStack = styled(VStack)`
  width: 92%;
  margin: 0 auto;
`

const StyledSection = styled(Section)`
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  overflow: hidden;
`
