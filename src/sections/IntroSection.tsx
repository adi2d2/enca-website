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
    background: radial-gradient(
      circle at 50% 120%,
      #009078,
      #00977d,
      #009d83,
      #00a489,
      #00ab8e,
      #00b194,
      #00b899,
      #00bf9f,
      #00c6a5,
      #00cdaa,
      #00d4b0,
      #00dbb6
    );
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
  background: radial-gradient(
    circle at 50% -20%,
    #234c4d,
    #21484a,
    #1f4547,
    #1e4144,
    #1c3e41,
    #1a3a3e,
    #19373b,
    #173338,
    #163035,
    #152d31,
    #13292e,
    #12262b
  );
`
