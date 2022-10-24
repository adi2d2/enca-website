import { FC, PropsWithChildren, ComponentPropsWithoutRef } from 'react'
import { css } from '@emotion/react'

const textCss = css`
  margin: 0;

  /* ALIGNMENT variations - inherited(left) by default */
  &[data-align='left'] {
    text-align: left;
  }
  &[data-align='center'] {
    text-align: center;
  }
  &[data-align='right'] {
    text-align: right;
  }

  /* WEIGHT variations, inherited by default */
  &[data-weight='thin'] {
    font-weight: 200;
  }
  &[data-weight='normal'] {
    font-weight: 400;
  }
  &[data-weight='bold'] {
    font-weight: 600;
  }

  /* FONT SIZE variations, inherited by default */
  &[data-size='1'] {
    font-size: var(--font-size-1);
  }
  &[data-size='2'] {
    font-size: var(--font-size-2);
  }
  &[data-size='3'] {
    font-size: var(--font-size-3);
  }
  &[data-size='4'] {
    font-size: var(--font-size-4);
  }
  &[data-size='5'] {
    font-size: var(--font-size-5);
  }
  &[data-size='6'] {
    font-size: var(--font-size-6);
  }
  &[data-size='7'] {
    font-size: var(--font-size-7);
  }
  &[data-size='8'] {
    font-size: var(--font-size-8);
  }
  &[data-size='9'] {
    font-size: var(--font-size-9);
  }

  /* COLOR Variations, inherited (light) by default */
  &[data-color='light'] {
    color: var(--color-light);
  }
  &[data-color='secondary'] {
    color: var(--color-secondary);
  }
  &[data-color='green'] {
    color: var(--color-green);
  }
  &[data-color='blue'] {
    color: var(--color-blue);
  }
  &[data-color='mid1'] {
    color: var(--color-mid1);
  }
  &[data-color='mid2'] {
    color: var(--color-mid2);
  }
  &[data-color='dark1'] {
    color: var(--color-dark1);
  }
  &[data-color='dark2'] {
    color: var(--color-dark2);
  }
  &[data-color='warning'] {
    color: var(--color-warning);
  }

  /* TRANSFORM variations, inherited (normal) by default */
  &[data-transform='normal'] {
    text-transform: normal;
  }
  &[data-transform='uppercase'] {
    text-transform: uppercase;
  }
`

interface TextProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'span'>> {
  align?: 'left' | 'center' | 'right'
  weight?: 'thin' | 'normal' | 'bold'
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  color?:
    | 'light'
    | 'green'
    | 'blue'
    | 'mid1'
    | 'mid2'
    | 'secondary'
    | 'dark1'
    | 'dark2'
    | 'warning'
  transform?: 'normal' | 'uppercase'
}

export const Text: FC<TextProps> = ({
  children,
  align,
  weight,
  size,
  color,
  transform,
  className,
  ...otherProps
}) => {
  return (
    <span
      data-align={align}
      data-weight={weight}
      data-size={size}
      data-color={color}
      data-transform={transform}
      className={className}
      css={textCss}
      {...otherProps}
    >
      {children}
    </span>
  )
}

export const Paragraph: FC<TextProps> = ({
  children,
  align,
  weight,
  size,
  color,
  transform,
  className,
  ...otherProps
}) => {
  return (
    <p
      data-align={align}
      data-weight={weight}
      data-size={size}
      data-color={color}
      data-transform={transform}
      className={className}
      css={textCss}
      {...otherProps}
    >
      {children}
    </p>
  )
}

export const Heading: FC<TextProps> = ({
  children,
  align,
  weight,
  size,
  color,
  transform,
  className,
  ...otherProps
}) => {
  return (
    <h3
      data-align={align}
      data-weight={weight}
      data-size={size}
      data-color={color}
      data-transform={transform}
      className={className}
      css={textCss}
      {...otherProps}
    >
      {children}
    </h3>
  )
}
