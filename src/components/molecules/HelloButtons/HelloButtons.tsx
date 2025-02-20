'use client';

import Button from '@/components/atoms/Button/Button';
import { ButtonColors, ButtonStyles, ButtonTypes } from '@/models';

export default function HelloButtons() {
  return (
    <>
      <Button
        href={'#projects'}
        type={ButtonTypes.button}
        color={ButtonColors.primary}
        design={ButtonStyles.solid}
      >
        Projects
      </Button>
      <Button
        href="/resume/Evan_Jenkins_Resume.pdf"
        type={ButtonTypes.button}
        download="Evan Jenkins Resume"
        design={ButtonStyles.outline}
      >
        My Resume
      </Button>
    </>
  );
}
