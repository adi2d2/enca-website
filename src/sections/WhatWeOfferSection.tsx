import styled from '@emotion/styled'

import { Section, Heading, Paragraph, VStack, DescriptionList } from '../shared'

export const WhatWeOfferSection = () => {
  return (
    <StyledSection>
      <Ball />
      <VStack gap="4">
        <Heading size="7" weight="thin">
          What we <strong>offer</strong>
        </Heading>
        <Paragraph color="secondary">
          We offer a holistic service, starting with droplets-as-a-service, all
          the way to equipment access
        </Paragraph>
        <StyledDescriptionList
          items={[
            {
              icon: 'egg',
              title: 'Initial R&D',
              content:
                'We help you design and choose the right materials for your microencapsulation needs'
            },
            {
              icon: 'egg',
              title: 'Informed design of microcapsules',
              content:
                'We employ an AI-based model that will speed up the R&D process and reduce the number of combination to be tested, based on the specific parameters of our system'
            },
            {
              icon: 'egg',
              title: 'Access to equipment',
              content:
                'We can provide the microfluidics device, together with access to the AI-model, to keep the microencapsulation process in-house. The equipment can be customized to your needs, and we’ll provide the consumables with regular maintenance and servicing.'
            }
          ]}
        />
      </VStack>
    </StyledSection>
  )
}

const StyledDescriptionList = styled(DescriptionList)`
  @media all and (max-width: 768px) {
    order: 0;
  }
`

const Ball = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: var(--color-green);
  border-radius: 50%;

  @media all and (max-width: 768px) {
    order: 1;
    max-width: 36%;
  }
`

const StyledSection = styled(Section)`
  width: calc(100% - 24px);
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 44px;
  padding: 46px 0;

  & > * {
    flex: 1;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`
