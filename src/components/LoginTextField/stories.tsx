import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { User } from '@styled-icons/boxicons-solid';

import LoginTextField, { TextFieldProps } from '.';

export default {
  title: 'Components/Login/TextField',
  component: LoginTextField,
  decorators: [withKnobs],
  args: {
    name: 'email',
    title: 'informe um valor',
    icon: <User size={18} />,
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta;

export const Default: Story<Omit<TextFieldProps, 'focus'>> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <LoginTextField {...args} />
  </div>
);

export const withError: Story<Omit<TextFieldProps, 'focus'>> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <LoginTextField {...args} />
  </div>
);

withError.args = {
  error: 'Ops...something is wrong'
};
