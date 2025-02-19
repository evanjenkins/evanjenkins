export const ButtonTypes = {
  submit: 'submit',
  reset: 'reset',
  button: 'button',
} as const;
export type ButtonTypeKeys = keyof typeof ButtonTypes;
export type ButtonType = typeof ButtonTypes[ButtonTypeKeys];

export const ButtonColors = {
  primary: 'primary',
  accent: 'accent',
} as const;
export type ButtonColorKeys = keyof typeof ButtonColors;
export type ButtonColor = typeof ButtonColors[ButtonColorKeys];

export interface ButtonProps {
  type: ButtonType;
  color: ButtonColor;
  label: string;
}
