import { ButtonColors, ButtonProps } from '@/models';
import cn from 'classnames';

export default function Button({ color, type, label }: ButtonProps) {
  return (
    <button
      className={cn(
        'text-sm rounded transition-colors font-bold ps-4 pe-4 inline-flex h-12 items-center justify-center',
        { 'bg-primary text-black hover:bg-primary-600': color === ButtonColors.primary },
        { 'bg-accent': color === ButtonColors.accent },
      )
      }
      type={type}
    >
      {label}
    </button>
  );
}
