import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { VStack } from './Stack'
import { Heading, Paragraph } from './Text'
import { Icon } from './Icon'

interface CardProps {
  icon?: string
  title: string
  content: string
}

export const Card: FC<CardProps> = ({ icon, title, content }) => {
  return (
    <CardBox tabIndex={0}>
      {icon ? <CardIcon icon={icon} /> : null}
      <VStack gap="4">
        <Heading size="3" weight="bold">
          {title}
        </Heading>
        <Paragraph>{content}</Paragraph>
      </VStack>
    </CardBox>
  )
}

const CardIcon = styled(Icon)`
  font-size: 48px;
  margin-left: -12px;
  margin-right: 8px;
`

const CardBox = styled.div`
  display: inline-flex;
  background-color: var(--color-dark2);
  border-radius: 6px;
  transition: color 0.3s, padding 0.3s, background-color 0.3s;
  padding: var(--spacing-7);
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--color-mid1);
  }
  &:hover h3,
  &:focus h3 {
    color: var(--color-light);
  }

  p {
    color: var(--color-mid2);
    transition: color 0.3s;
  }

  &:hover p,
  &:focus p {
    color: var(--color-secondary);
  }

  @media all and (max-width: 768px) {
    padding: var(--spacing-5);
  }
`
