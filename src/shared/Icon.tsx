import { ComponentPropsWithoutRef, FC } from 'react'

interface IconProps extends ComponentPropsWithoutRef<'span'> {
  icon: string
}

export const Icon: FC<IconProps> = ({ icon, className, ...otherProps }) => {
  return (
    <span
      className={className + ' ' + 'material-symbols-outlined'}
      {...otherProps}
    >
      {icon}
    </span>
  )
}
