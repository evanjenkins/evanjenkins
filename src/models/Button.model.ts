export const ButtonTypes = {
  submit: 'submit',
  reset: 'reset',
  button: 'button',
} as const;
export type ButtonTypeKeys = keyof typeof ButtonTypes;
export type ButtonType = typeof ButtonTypes[ButtonTypeKeys];

export const ButtonColors = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
} as const;
export type ButtonColorKeys = keyof typeof ButtonColors;
export type ButtonColor = typeof ButtonColors[ButtonColorKeys];

export const ButtonStyles = {
  solid: 'solid',
  outline: 'outline',
} as const;
export type ButtonStyleKeys = keyof typeof ButtonStyles;
export type ButtonStyle = typeof ButtonStyles[ButtonStyleKeys];


