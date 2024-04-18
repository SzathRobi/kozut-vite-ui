import { type VariantProps } from 'class-variance-authority';
import { ReactNode, type ComponentPropsWithRef } from 'react';

import { clsxMerge } from '../../lib/utils/classNameUtils';
import { buttonStyles } from './helpers';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
}

export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}
