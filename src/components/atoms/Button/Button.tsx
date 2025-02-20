import { AnimationSpeeds } from '@/consts';
import { ButtonColor, ButtonColors, ButtonStyle, ButtonStyles, ButtonType } from '@/models';
import cn from 'classnames';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
  color?: ButtonColor;
  onClick?: () => void;
  href?: string;
  design?: ButtonStyle;
}

export default function Button({
                                 color = ButtonColors.default,
                                 type,
                                 design = ButtonStyles.solid,
                                 children,
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
          target="_blank"
        >
          {children}
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
      {children}
    </motion.button>
  );
}
