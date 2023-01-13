import { styled } from '@linaria/atomic'

import { Section, Heading, VStack, PartnerList } from '../shared'

import sdtaPartnerImageUrl from '../assets/sdta-partner.png'
import aStarPartnerImageUrl from '../assets/a-star-partner.png'

export const PartnersSection = () => {
  return (
    <StyledSection id="partners">
      <StyledVStack gap="5">
        <Heading size="7" align="center" weight="thin">
          Partners
        </Heading>
        <PartnerList
          partners={[
            {
              imageUrl: sdtaPartnerImageUrl,
              name: 'Singapore Deep-Tech Alliance',
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
      </StyledVStack>
    </StyledSection>
  )
}

const StyledVStack = styled(VStack)`
  width: calc(100% - 24px);
  max-width: 560px;
  margin: 0 auto;
`

const StyledSection = styled(Section)`
  justify-content: center;

  background: radial-gradient(
    circle at 120% 50%,
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
