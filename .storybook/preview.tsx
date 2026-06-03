import '../src/styles/fonts';
import '../src/styles/tokens.css';
import '../src/styles/colors_and_type.css';

import { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming';

const DarkBackground = ({ children }) => {
  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    document.documentElement.style.backgroundColor = '#000';
  }, []);
  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      // This sets 'dark' as the default active background
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#F8F9FA',
        },
        {
          name: 'dark',
          value: '#333333', // Adjust this hex code to match your preferred dark color
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    initialGlobals: {
      backgrounds: { value: 'dark' },
    },
    a11y: {
      test: 'todo'
    }
  },

  decorators: [
    (Story) => <DarkBackground><Story /></DarkBackground>,
  ],
};

export default preview;