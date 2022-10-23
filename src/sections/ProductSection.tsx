import { styled } from '@linaria/atomic'

import {
  HStack,
  Section,
  Card,
  Heading,
  Paragraph,
  VStack,
  Icon
} from 'src/shared'

export const ProductSection = () => {
  return (
    <StyledSection>
      <VStack gap="3">
        <Heading size="7" align="center" weight="thin">
          Microfluidics-based droplet generator for microencapsulation
        </Heading>
        <Paragraph align="center">
          We aim to make the microencapsulation process more sustainable by
          employing a microfluidics-based droplet generating technology leading
          to:
        </Paragraph>
        <CardWrapper>
          <Card
            icon="egg"
            title="EASILY CUSTOMIZABLE MICROCAPSULE DESIGN"
            content="Device with multiple degrees of freedom that allow easy configuration changes for different microcapsules designs with high uniformity"
          />
          <Card
            icon="snowing"
            title="HIGH-THROUGHPUT DROPLET FLOW"
            content="> 1000 droplets/s, depending on the reagents used"
          />
          <Card
            icon="memory"
            title="CHEAP AND STERILIZED MICROFLUIDIC CHIPS"
            content="Reduced change-over downtime to <1 min."
          />
          <Card
            icon="science"
            title="REDUCED USAGE OF REAGENTS"
            content="Microfluidic channels that allow the efficient usage of reagents for microcapsules formation"
          />
        </CardWrapper>
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

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: var(--spacing-4);

  @media all and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
