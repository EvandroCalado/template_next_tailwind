import { Meta, StoryFn } from '@storybook/react';
import { Main, MainProps } from './Main';

export default {
  title: 'Components/Main',
  component: Main,
  args: {
    title: 'template next',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<MainProps> = (args) => <Main {...args} />;
