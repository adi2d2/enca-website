import styled from '@emotion/styled'

import { Section, Heading, VStack, AvatarList } from '../shared'

import jonahAvatarUrl from '../assets/jonah.png'
import andreeaAvatarUrl from '../assets/andreea.png'
import adithyaAvatarUrl from '../assets/adithya.png'

export const TeamSection = () => {
  return (
    <StyledSection id="team">
      <StyledVStack gap="9">
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
      </StyledVStack>
    </StyledSection>
  )
}

const StyledVStack = styled(VStack)`
  width: calc(100% - 24px);
  max-width: 800px;
  margin: 0 auto;
`

const StyledSection = styled(Section)`
  justify-content: center;
  padding: 46px 0;

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
