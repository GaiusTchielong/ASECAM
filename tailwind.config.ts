import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { primary:'#1E7A34', 'primary-dark':'#155A26', 'accent-red':'#CE1126', 'accent-gold':'#FCD116', ink:'#1A1A1A', 'ink-secondary':'#4B5563', surface:'#F7F8F6' }, fontFamily: { display:['var(--font-sora)'], sans:['var(--font-inter)'] }, boxShadow: { soft:'0 18px 50px rgba(21,90,38,.12)' } } }, plugins: [] };
export default config;
