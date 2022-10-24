import styled from '@emotion/styled'

import { Section, Heading, VStack, AvatarList } from '../shared'

import jonahAvatarUrl from '../assets/jonah.png'
import andreeaAvatarUrl from '../assets/andreea.png'
import adithyaAvatarUrl from '../assets/adithya.png'

export const TeamSection = () => {
  return (
    <StyledSection id="team">
      <VStack gap="9">
        <Heading size="7" align="center" weight="thin">
          Meet <strong>Our Team</strong>
        </Heading>
        <AvatarList
          avatars={[
            {
              imageUrl: jonahAvatarUrl,
              name: 'Jonah Wong',
              position: 'CEO',
              description:
                '11 years of regional commercial experience in medtech and other industries'
            },
            {
              imageUrl: andreeaAvatarUrl,
              name: 'Andreea Radulescu',
              position: 'CTO',
              description:
                'PhD in nanotechnology and 8 years of innovation research experience for commercialization'
            },
            {
              imageUrl: adithyaAvatarUrl,
              name: 'Adithya Narayanan',
              position: 'CPO',
              description:
                'Mechanical engineer with 13 years experience as owner of a product engineering firm'
            }
          ]}
        />
      </VStack>
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  width: calc(100% - 24px);
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  padding: 46px 0;
`
