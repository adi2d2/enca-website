import styled from '@emotion/styled'

import {
  Section,
  Heading,
  Paragraph,
  VStack,
  DescriptionList,
  HStack
} from '../shared'

export const WhatWeOfferSection = () => {
  return (
    <StyledSection id="what-we-offer">
      <StyledHStack gap="9" align="center">
        <Ball />
        <VStack gap="4">
          <Heading size="7" weight="thin">
            What we <strong>offer</strong>
          </Heading>
          <Paragraph color="secondary">
            We offer a holistic service, starting with droplets-as-a-service,
            all the way to equipment access
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
      </StyledHStack>
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

  background: radial-gradient(
    circle at 110% 60%,
    #009078,
    #00977d,
    #009d83,
    #00a489,
    #00ab8e,
    #00b194,
    #00b899,
    #00bf9f,
    #00c6a5,
    #00cdaa,
    #00d4b0,
    #00dbb6
  );

  @media all and (max-width: 768px) {
    order: 1;
    max-width: 36%;
  }
`

const StyledHStack = styled(HStack)`
  width: calc(100% - 24px);
  max-width: 960px;
  margin: 0 auto;
  & > * {
    flex: 1;
  }

  @media all and (max-width: 768px) {
    && {
      flex-direction: column;
    }
  }
`

const StyledSection = styled(Section)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  /* gap: 44px; */
  padding: 46px 0;

  background: radial-gradient(
    circle at 20% 50%,
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
