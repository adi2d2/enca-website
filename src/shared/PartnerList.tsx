import { ComponentPropsWithoutRef, FC } from 'react'
import styled from '@emotion/styled'

import { Heading } from './Text'
import { VStack } from './Stack'

interface Partner {
  imageUrl: string
  background: 'light' | 'dark'
  name: string
  url: string
}

interface PartnerListProps extends ComponentPropsWithoutRef<'div'> {
  partners: Partner[]
}

export const PartnerList: FC<PartnerListProps> = ({
  partners,
  ...otherProps
}) => {
  return (
    <PartnerGrid {...otherProps}>
      {partners.map(({ imageUrl, name, background, url }) => (
        <UnstyledAnchor href={url} target="_blank">
          <VStack gap="3" align="center" key={name}>
            <PartnerImage
              style={{ backgroundImage: `url(${imageUrl})` }}
              data-background={background}
            />
            <Heading size="2" align="center">
              {name}
            </Heading>
          </VStack>
        </UnstyledAnchor>
      ))}
    </PartnerGrid>
  )
}

const PartnerImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-size: 90%;
  background-color: var(--color-dark2);
  transition: background-size 0.3s;

  &[data-background='light'] {
    background-color: var(--color-mid2);
  }
`

const UnstyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  outline: none;

  &:hover ${PartnerImage}, &:focus ${PartnerImage} {
    background-size: 95%;
  }

  &:hover h3,
  &:focus h3 {
    color: var(--color-green);
  }
`

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-9);
  grid-auto-rows: 1fr;
`
