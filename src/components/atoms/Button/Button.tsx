import * as motion from 'motion/react-client';
import cn from 'classnames';
import { ButtonColors, ButtonProps, ButtonStyles } from '@/models';
import { AnimationSpeeds } from '@/consts';

export default function Button({ color, type, style = ButtonStyles.solid, label }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: AnimationSpeeds.fast },
      }}
      whileTap={{ scale: 0.9, transition: { duration: AnimationSpeeds.fast } }}
      className={cn(
        'text-sm rounded transition-colors font-bold ps-4 pe-4 inline-flex h-12 items-center justify-center',
        { 'bg-primary text-black hover:bg-primary-600': color === ButtonColors.primary && style === ButtonStyles.solid },
        { 'bg-transparent border-2 border-primary text-black dark:text-white hover:bg-primary hover:text-black': color === ButtonColors.primary && style === ButtonStyles.outline },
        { 'bg-accent': color === ButtonColors.accent },
      )
      }
      type={type}
    >
      {label}
    </motion.button>
  );
}
