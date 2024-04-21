import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '500': '#F9C42E',
          '600': '#F3C04C',
        },
        gray: {
          '200': '#EAECF0',
          '600': '#475467',
          '900': '#101828',
        },
        green: {
          '500': '#12B76A',
        },
        red: {
          '500': '#F04438',
        },
      },
      spacing: {
        '4.5': '18px',
      },
    },
  },
  plugins: [],
};
export default config;
