import styled from '@emotion/styled'

import { Section, Heading, Paragraph, VStack, PartnerList } from '../shared'
import sdtaPartnerImageUrl from '../assets/sdta-partner.png'
import aStarPartnerImageUrl from '../assets/a-star-partner.png'

export const PartnersSection = () => {
  return (
    <StyledSection id="partners">
      <VStack gap="5">
        <Heading size="7" align="center" weight="thin">
          Partners
        </Heading>
        <PartnerList
          partners={[
            {
              imageUrl: sdtaPartnerImageUrl,
              name: 'Singapore Deep Tech Alliance',
              background: 'dark',
              url: 'https://sdta.sg/'
            },
            {
              imageUrl: aStarPartnerImageUrl,
              name: 'Agency for Science, Technology And Research',
              background: 'light',
              url: 'https://www.a-star.edu.sg/'
            }
          ]}
        />
      </VStack>
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  width: calc(100% - 24px);
  max-width: 560px;
  margin: 0 auto;
  justify-content: center;
`
