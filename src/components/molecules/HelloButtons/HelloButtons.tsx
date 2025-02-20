'use client';

import Button from '@/components/atoms/Button/Button';
import { ButtonColors, ButtonStyles, ButtonTypes } from '@/models';

export default function HelloButtons() {
  const downloadResume = () => {
  };

  return (
    <>
      <Button href={'#projects'} type={ButtonTypes.button} color={ButtonColors.primary}
              design={ButtonStyles.solid}
      >Projects</Button>
      <Button onClick={downloadResume} type={ButtonTypes.button}
              design={ButtonStyles.outline}
      >My Resume</Button>
    </>
  );
}
