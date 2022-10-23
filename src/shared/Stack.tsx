import {
  FC,
  PropsWithChildren,
  ComponentPropsWithoutRef,
  CSSProperties
} from 'react'
import styled from '@emotion/styled'

const StyledStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* DIRECTION variations - inherited by default */
  &[data-direction='row'] {
    flex-direction: row;
  }
  &[data-direction='column'] {
    flex-direction: column;
  }

  /* ALIGN variations - inherited by default */
  &[data-align='start'] {
    align-items: start;
  }
  &[data-align='center'] {
    align-items: center;
  }
  &[data-align='end'] {
    align-items: end;
  }
  &[data-align='stretch'] {
    align-items: stretch;
  }

  /* JUSTIFY variations - inherited by default */
  &[data-justify='start'] {
    justify-content: start;
  }
  &[data-justify='center'] {
    justify-content: center;
  }
  &[data-justify='end'] {
    justify-content: end;
  }
  &[data-justify='stretch'] {
    justify-content: stretch;
  }
  &[data-justify='space-around'] {
    justify-content: space-around;
  }
  &[data-justify='space-evenly'] {
    justify-content: space-evenly;
  }
  &[data-justify='space-between'] {
    justify-content: space-between;
  }

  /* GAP variations, inherited by default */
  &[data-gap='1'] {
    gap: var(--spacing-1);
  }
  &[data-gap='2'] {
    gap: var(--spacing-2);
  }
  &[data-gap='3'] {
    gap: var(--spacing-3);
  }
  &[data-gap='4'] {
    gap: var(--spacing-4);
  }
  &[data-gap='5'] {
    gap: var(--spacing-5);
  }
  &[data-gap='6'] {
    gap: var(--spacing-6);
  }
  &[data-gap='7'] {
    gap: var(--spacing-7);
  }
  &[data-gap='8'] {
    gap: var(--spacing-8);
  }
  &[data-gap='9'] {
    gap: var(--spacing-9);
  }
`

interface StackProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'div'>> {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  gap?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
}

export const Stack: FC<StackProps> = ({
  children,
  align,
  justify,
  direction,
  gap,
  ...otherProps
}) => {
  return (
    <StyledStack
      data-align={align}
      data-justify={justify}
      data-direction={direction}
      data-gap={gap}
      {...otherProps}
    >
      {children}
    </StyledStack>
  )
}

export const HStack: FC<StackProps> = (props) => {
  return <Stack {...props} direction="row" />
}

export const VStack: FC<StackProps> = (props) => {
  return <Stack {...props} direction="column" />
}
