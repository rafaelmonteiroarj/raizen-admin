import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import LoginButton, { ButtonProps } from '.';

export default {
  title: 'Components/Login/Button',
  component: LoginButton,
  decorators: [withKnobs],
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = args => <LoginButton {...args} />;

Default.args = {
  children: 'Login'
};
