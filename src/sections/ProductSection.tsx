import styled from '@emotion/styled'

import { Section, CardList, Heading, Paragraph, VStack } from '../shared'

export const ProductSection = () => {
  return (
    <StyledSection id="product">
      <VStack gap="3">
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
