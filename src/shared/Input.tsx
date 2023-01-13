import { FC, ComponentPropsWithoutRef } from 'react'
import { cx, css } from '@linaria/core'
import { styled } from '@linaria/atomic'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  emphasys?: 'outline' | 'fill'
  fullWidth?: boolean
}

export const Input: FC<InputProps> = ({
  emphasys = 'outline',
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <input
      data-emphasys={emphasys}
      data-full-width={fullWidth}
      className={cx(inputCss, className)}
      {...otherProps}
    />
  )
}

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  emphasys?: 'outline' | 'fill'
  fullWidth?: boolean
}

export const Textarea: FC<TextareaProps> = ({
  emphasys = 'outline',
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <textarea
      data-emphasys={emphasys}
      data-full-width={fullWidth}
      className={cx(inputCss, textareaCss, className)}
      {...otherProps}
    />
  )
}

const inputCss = css`
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
    color: var(--color-light);
    border: 1px solid var(--color-mid2);

    &:hover,
    &:focus {
      background-color: var(--color-dark2);
      border-color: var(--color-dark2);
      color: var(--color-light);
    }
    &:active {
      background-color: var(--color-mid1);
      color: var(--color-light);
    }

    &::placeholder {
      color: var(--color-secondary);
    }
  }
  &[data-emphasys='fill'] {
    background-color: var(--color-dark2);
    color: var(--color-light);
    border: 1px solid var(--color-dark2);

    &::placeholder {
      color: var(--color-mid2);
    }

    &:hover,
    &:focus,
    &:active {
      background-color: var(--color-mid1);
      border: 1px solid var(--color-mid1);

      &::placeholder {
        color: var(--color-secondary);
      }
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }
`

const textareaCss = css`
  min-height: 96px;
  padding: 8px 16px;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
