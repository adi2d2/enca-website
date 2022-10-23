import { ComponentPropsWithoutRef, FC } from 'react'
import styled from '@emotion/styled'

import { Heading, Paragraph } from './Text'
import { VStack } from './Stack'

interface Avatar {
  imageUrl: string
  name: string
  position: string
  description: string
}

interface AvatarListProps extends ComponentPropsWithoutRef<'div'> {
  avatars: Avatar[]
}

export const AvatarList: FC<AvatarListProps> = ({ avatars, ...otherProps }) => {
  return (
    <AvatarGrid {...otherProps}>
      {avatars.map(({ imageUrl, name, position, description }) => (
        <VStack gap="3" align="center" key={name}>
          <AvatarImage src={imageUrl} alt={`${name} - ${position}`} />
          <VStack gap="1" align="center">
            <Heading size="2">{name}</Heading>
            <Heading transform="uppercase" color="mid2" size="1">
              {position}
            </Heading>
            <Paragraph size="1" color="mid1" align="center">
              {description}
            </Paragraph>
          </VStack>
        </VStack>
      ))}
    </AvatarGrid>
  )
}

const AvatarImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: var(--color-dark2);
  border-radius: 50%;
  overflow: hidden;

  @media all and (max-width: 640px) {
    width: 75%;
  }
`

const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-9);
  grid-auto-rows: 1fr;

  @media all and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
