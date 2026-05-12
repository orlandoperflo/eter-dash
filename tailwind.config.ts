import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07080A',
        graphite: '#101216',
        porcelain: '#F7F4EE',
        mist: '#A6ADB8',
        signal: '#C9A46A',
        cobalt: '#7DA0FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        ambient: '0 40px 120px rgba(0, 0, 0, 0.38)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.32)',
      },
      backgroundImage: {
        'radial-quiet': 'radial-gradient(circle at 50% 0%, rgba(201,164,106,0.18), transparent 32%), radial-gradient(circle at 0% 30%, rgba(125,160,255,0.10), transparent 24%)',
      },
    },
  },
  plugins: [],
};

export default config;
