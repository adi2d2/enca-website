import { styled } from '@linaria/atomic'

import { Section, Heading, VStack, AvatarList } from '../shared'

import jonahAvatarUrl from '../assets/jonah.png'
import adithyaAvatarUrl from '../assets/adithya.png'
import thcAvatarUrl from '../assets/THC.png'

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
              position: 'Chief Executive Officer',
              description:
                '11 years of regional commercial experience in medtech and other industries',
              avatarUrl: 'https://www.linkedin.com/in/jonahwong/'
            },
             {
              imageUrl: adithyaAvatarUrl,
              name: 'Adithya Narayanan',
              position: 'Chief Technology Officer',
              description:
                'Mechanical engineer with 13 years experience as owner of a product engineering firm',
              avatarUrl: 'https://www.linkedin.com/in/adi2d2/'
            },
            {
              imageUrl: thcAvatarUrl,
              name: 'Tze Howe Charn',
              position: 'Chief Scientific Officer',
              description:
                'PhD Bioengineer, former lead scientist, current global R&D director in microfluidics company',
              avatarUrl: 'https://www.linkedin.com/in/tze-howe-charn-0a90393a/'
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
