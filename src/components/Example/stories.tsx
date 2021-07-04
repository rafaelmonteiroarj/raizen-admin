import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Example from '.';

export default {
  title: 'Boilerplate/Example',
  component: Example,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as Meta;

export const Template: Story = (args: Args) => (
  <Example
    title={text('Title', 'Boilerplate React')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
    {...args}
  />
);

interface Args {
  title?: string;
  description?: string;
  backgroundColor?: string;
  color?: string;
}
