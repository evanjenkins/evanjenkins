import * as motion from 'motion/react-client';
import Link from 'next/link';
import cn from 'classnames';
import { ButtonColors, ButtonProps, ButtonStyles } from '@/models';
import { AnimationSpeeds } from '@/consts';

export default function Button({
                                 color = ButtonColors.default,
                                 type,
                                 design = ButtonStyles.solid,
                                 label,
                                 href,
                                 onClick,
                               }: ButtonProps) {
  const className = cn(
    'btn',
    { 'btn-primary': color === ButtonColors.primary },
    { 'btn-secondary': color === ButtonColors.secondary },
    { 'btn-accent': color === ButtonColors.accent },
    { 'btn-outline': design === ButtonStyles.outline },
  );
  const whileHover = {
    scale: 1.05,
    transition: { duration: AnimationSpeeds.fast },
  };
  const whileTap = { scale: 0.9, transition: { duration: AnimationSpeeds.fast } };

  if (href) {
    return (
      <motion.div whileHover={whileHover}
                  whileTap={whileTap}
                  className={className}>
        <Link
          href={href}
          role={type}
        >
          {label}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
      type={type}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}
