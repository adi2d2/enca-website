import { styled } from '@linaria/atomic'

import { Section, CardList, Heading, Paragraph, VStack } from '../shared'

export const ProductSection = () => {
  return (
    <StyledSection id="product">
      <StyledVStack gap="3">
        <Heading size="7" align="center" weight="thin">
          Microfluidics-based droplet generator for microencapsulation
        </Heading>

        <Paragraph align="center">
          We aim to make the microencapsulation process more sustainable by
          employing a microfluidics-based droplet generating technology leading
          to:
        </Paragraph>

        <CardList
          cards={[
            {
              icon: 'egg',
              title: 'EASILY CUSTOMIZABLE MICROCAPSULE DESIGN',
              content:
                'Device with multiple degrees of freedom that allow easy configuration changes for different microcapsules designs with high uniformity'
            },
            {
              icon: 'snowing',
              title: 'HIGH-THROUGHPUT DROPLET FLOW',
              content: '> 1000 droplets/s, depending on the reagents used'
            },
            {
              icon: 'memory',
              title: 'CHEAP AND STERILIZED MICROFLUIDIC CHIPS',
              content: 'Reduced change-over downtime to <1 min.'
            },
            {
              icon: 'science',
              title: 'REDUCED USAGE OF REAGENTS',
              content:
                'Microfluidic channels that allow the efficient usage of reagents for microcapsules formation'
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
    circle at 50% 50%,
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
