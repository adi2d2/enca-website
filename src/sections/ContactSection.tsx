import { styled } from '@linaria/atomic'

import { Section, Heading, VStack, ContactForm } from '../shared'

export const ContactSection = () => {
  return (
    <StyledSection id="contact">
      <StyledVStack gap="7">
        <Heading size="7" align="center" weight="thin">
          Contact us
        </Heading>
        <ContactForm />
      </StyledVStack>
    </StyledSection>
  )
}

const StyledVStack = styled(VStack)`
  width: calc(100% - 24px);
  max-width: 600px;
  margin: 0 auto;
`

const StyledSection = styled(Section)`
  justify-content: center;

  background: radial-gradient(
    circle at -20% 50%,
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
