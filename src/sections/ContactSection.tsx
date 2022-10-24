import styled from '@emotion/styled'

import { Section, Heading, VStack, ContactForm } from '../shared'

export const ContactSection = () => {
  return (
    <StyledSection id="contact">
      <VStack gap="7">
        <Heading size="7" align="center" weight="thin">
          Contact us
        </Heading>
        <ContactForm />
      </VStack>
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  width: calc(100% - 24px);
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
`
