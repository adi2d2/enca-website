import { ComponentPropsWithoutRef, FC } from 'react'
import { styled } from '@linaria/atomic'

import { Heading, Paragraph } from './Text'
import { Icon } from './Icon'
import { VStack } from './Stack'

interface DescriptionItem {
  icon: string
  title: string
  content: string
}

interface DescriptionListProps extends ComponentPropsWithoutRef<'div'> {
  items: DescriptionItem[]
}

export const DescriptionList: FC<DescriptionListProps> = ({
  items,
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
      {items.map(({ icon, title, content }) => (
        <Item>
          {icon ? <ItemIcon icon={icon} /> : null}
          <VStack gap="2">
            <Heading transform="uppercase" color="green" size="2">
              {title}
            </Heading>
            <Paragraph size="1">{content}</Paragraph>
          </VStack>
        </Item>
      ))}
    </div>
  )
}

const ItemIcon = styled(Icon)`
  font-size: 32px;
  margin-left: 8px;
`

const Item = styled.div`
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-4) 0;
  border-top: 1px solid var(--color-mid2);

  &:last-of-type {
    border-bottom: 1px solid var(--color-mid2);
  }
`
