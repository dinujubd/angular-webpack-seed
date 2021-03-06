// `.env.json` is generated by the `npm run build` command
import env from './.env.json';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  hmr: false
};
