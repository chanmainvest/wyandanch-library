// ─── Locale Registry ─────────────────────────────────────────────────────────
// To add a new locale in a fork:
//   1. Create lib/i18n/translations/<code>.ts  (export a TranslationDict)
//   2. Add a LocaleDefinition entry to this array
//   3. Import + register it in lib/i18n/index.ts
//
// The order here determines the order of flag buttons in the UI.

import type { LocaleDefinition } from './types';

export const localeDefinitions: LocaleDefinition[] = [
  {
    code: 'en',
    label: 'EN',
    nativeLabel: 'English',
    dir: 'ltr',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
  <clipPath id="uk-t"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
  <clipPath id="uk-s"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
  <g clip-path="url(#uk-t)">
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-s)" stroke="#C8102E" stroke-width="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
  </g>
</svg>`,
  },
  {
    code: 'zh-HK',
    label: '香港',
    nativeLabel: '繁體中文（香港）',
    dir: 'ltr',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
  <rect width="60" height="30" fill="#DE2910"/>
  <g fill="#FFDE00" transform="translate(15,15)">
    <path d="M0,-8 L1.9,-2.6 L7.6,-2.5 L3.1,0.9 L4.7,6.4 L0,3.2 L-4.7,6.4 L-3.1,0.9 L-7.6,-2.5 L-1.9,-2.6Z" transform="scale(0.5)"/>
    <path d="M0,-4 L0.5,-1.3 L3.8,-1.2 L1.5,0.5 L2.3,3.2 L0,1.6 L-2.3,3.2 L-1.5,0.5 L-3.8,-1.2 L-0.5,-1.3Z" transform="translate(8,-2) rotate(-15)"/>
    <path d="M0,-4 L0.5,-1.3 L3.8,-1.2 L1.5,0.5 L2.3,3.2 L0,1.6 L-2.3,3.2 L-1.5,0.5 L-3.8,-1.2 L-0.5,-1.3Z" transform="translate(10,3) rotate(15)"/>
    <path d="M0,-4 L0.5,-1.3 L3.8,-1.2 L1.5,0.5 L2.3,3.2 L0,1.6 L-2.3,3.2 L-1.5,0.5 L-3.8,-1.2 L-0.5,-1.3Z" transform="translate(6,7) rotate(35)"/>
    <path d="M0,-4 L0.5,-1.3 L3.8,-1.2 L1.5,0.5 L2.3,3.2 L0,1.6 L-2.3,3.2 L-1.5,0.5 L-3.8,-1.2 L-0.5,-1.3Z" transform="translate(1,8) rotate(65)"/>
  </g>
</svg>`,
  },
  {
    code: 'zh-TW',
    label: '台灣',
    nativeLabel: '繁體中文（台灣）',
    dir: 'ltr',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
  <rect width="60" height="30" fill="#FE0000"/>
  <rect width="30" height="15" fill="#000095"/>
  <circle cx="15" cy="7.5" r="5.5" fill="#fff"/>
  <circle cx="15" cy="7.5" r="4" fill="#000095"/>
  <path d="M15,3.5 L15.5,5.1 L17.2,5.1 L15.9,6.1 L16.3,7.7 L15,6.8 L13.7,7.7 L14.1,6.1 L12.8,5.1 L14.5,5.1Z" fill="#fff"/>
</svg>`,
  },
  {
    code: 'zh-CN',
    label: '中文',
    nativeLabel: '简体中文（中国大陆）',
    dir: 'ltr',
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
  <rect width="60" height="30" fill="#DE2910"/>
  <g fill="#FFDE00">
    <path d="M7.5,3 L8.6,6.4 L12.1,6.4 L9.3,8.4 L10.3,11.8 L7.5,9.8 L4.7,11.8 L5.7,8.4 L2.9,6.4 L6.4,6.4Z"/>
    <path d="M18,1 L18.4,2.3 L19.8,2.3 L18.7,3 L19.1,4.3 L18,3.6 L16.9,4.3 L17.3,3 L16.2,2.3 L17.6,2.3Z"/>
    <path d="M21,5 L21.4,6.3 L22.8,6.3 L21.7,7 L22.1,8.3 L21,7.6 L19.9,8.3 L20.3,7 L19.2,6.3 L20.6,6.3Z"/>
    <path d="M21,10 L21.4,11.3 L22.8,11.3 L21.7,12 L22.1,13.3 L21,12.6 L19.9,13.3 L20.3,12 L19.2,11.3 L20.6,11.3Z"/>
    <path d="M18,14 L18.4,15.3 L19.8,15.3 L18.7,16 L19.1,17.3 L18,16.6 L16.9,17.3 L17.3,16 L16.2,15.3 L17.6,15.3Z"/>
  </g>
</svg>`,
  },
];

// ─── Locale fallback chains ───────────────────────────────────────────────────
// When a key is missing in a locale, these chains define which locales to try next.
// Forks can extend this map to add fallbacks for their new locales.
export const localeFallbacks: Record<string, string[]> = {
  'en':    ['en'],
  'zh-HK': ['zh-HK', 'zh-TW', 'zh-CN', 'en'],
  'zh-TW': ['zh-TW', 'zh-HK', 'zh-CN', 'en'],
  'zh-CN': ['zh-CN', 'zh-HK', 'zh-TW', 'en'],
};
