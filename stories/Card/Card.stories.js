// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
import { createCard } from './Card.js';

export default {
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  title: 'Components/Atoms/Card',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCard({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'HOLA CARD',
  content: '<h2>LOL</h2>',
};

export const Other = Template.bind({});
Other.args = {
  title: 'WOW Pero qué cosa tan loca!',
  content: '<p>LOL</p>',
};
