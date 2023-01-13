import { FC, PropsWithChildren, ComponentPropsWithoutRef } from 'react'
import { cx, css } from '@linaria/core'

interface ButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'button'>> {
  emphasys?: 'outline' | 'fill'
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  emphasys = 'outline',
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <button
      data-emphasys={emphasys}
      data-full-width={fullWidth}
      className={cx(buttonCss, className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}

interface AnchorButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'a'>> {
  emphasys?: 'outline' | 'fill'
  fullWidth?: boolean
}

export const AnchorButton: FC<AnchorButtonProps> = ({
  children,
  emphasys = 'outline',
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <a
      data-emphasys={emphasys}
      data-full-width={fullWidth}
      className={cx(buttonCss, className)}
      {...otherProps}
    >
      {children}
    </a>
  )
}

const buttonCss = css`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-height: 40px;
  min-width: 40px;
  border-radius: 6px;
  padding: 0 24px;
  transition: color 0.3s, background-color 0.3s, border 0.3s;
  font-weight: 500;
  outline: none;

  &[data-emphasys='outline'] {
    background-color: transparent;
    color: var(--color-mid2);
    border: 1px solid var(--color-mid2);

    &:hover,
    &:focus {
      background-color: var(--color-mid2);
      color: var(--color-light);
    }
    &:active {
      background-color: var(--color-mid1);
      border-color: var(--color-mid1);
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
  }

  &[data-full-width='true'] {
    width: 100%;
  }
`
