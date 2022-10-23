import { FC, ComponentPropsWithoutRef } from 'react'
import styled from '@emotion/styled'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  emphasys?: 'outline' | 'fill'
  fullWidth?: boolean
}

export const Input: FC<InputProps> = ({
  emphasys = 'outline',
  fullWidth,
  ...otherProps
}) => {
  return (
    <StyledInput
      data-emphasys={emphasys}
      data-full-width={fullWidth}
      {...otherProps}
    />
  )
}

const StyledInput = styled.input`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-height: 36px;
  min-width: 36px;
  border-radius: 6px;
  padding: 0 16px;
  transition: color 0.3s, background-color 0.3s, border 0.3s;

  &[data-emphasys='outline'] {
    background-color: transparent;
    color: var(--color-green);
    border: 1px solid var(--color-green);

    &:hover,
    &:focus {
      background-color: var(--color-mid1);
      color: var(--color-light);
    }
    &:active {
      background-color: var(--color-green);
      color: var(--color-dark1);
    }

    &::placeholder {
      color: var(--color-light);
    }
  }
  &[data-emphasys='fill'] {
    background-color: var(--color-mid1);
    color: var(--color-light);
    border: 1px solid var(--color-mid1);

    &:hover,
    &:focus,
    &:active {
      background-color: var(--color-mid2);
      color: var(--color-dark1);
      border: 1px solid var(--color-mid2);
    }

    &::placeholder {
      color: var(--color-dark1);
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }
`
