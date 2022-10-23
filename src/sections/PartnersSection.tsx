import styled from '@emotion/styled'

import { Section, Heading, Paragraph, VStack } from '../shared'

export const PartnersSection = () => {
  return (
    <StyledSection>
      <VStack gap="3">
        <Heading size="7" align="center" weight="thin">
          Partners
        </Heading>
        <Paragraph align="center">Coming soon</Paragraph>
      </VStack>
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  width: calc(100% - 24px);
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
`
