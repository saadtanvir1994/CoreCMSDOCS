import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CoreCMSAPI",
  description: "",
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: 'auto',
      },
    },
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction', activeMatch: '^/(?!$)' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction'
      },
      {
        text: 'Installation',
        link: '/installation',
      },
      {
        text: 'Import Templates',
        link: '/import-templates',
      },
      {
        text: 'Project',
        base: '/project',
        items: [
          { text: 'Dashboard', link: '/dashboard.md' },
          { text: 'Settings', base: '/project/settings', items: [
            { text: 'Project Details', link: '/details' },
            { text: 'Localization', link: '/localization' },
            { text: 'Users & Roles', link: '/users' },
            { text: 'API Access', link: '/api-access' },
            { text: 'Webhooks', link: '/webhooks' },
          ]},
          { text: 'Collections', link: '/collections' },
          { text: 'Blocks', link: '/blocks' },
          { text: 'Fields', link: '/fields' },
          { text: 'Field Types', link: '/field-types' },
          { text: 'Content', link: '/content' },
          { text: 'Media Library', link: '/media-library' },
        ],
      }
    ],
  }
})
