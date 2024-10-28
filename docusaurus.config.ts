import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'LDAMLE Docs',
    tagline: 'Dinosaurs are cool',
    favicon: 'icons/dark-without-text.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    organizationName: 'pluttan', // Usually your GitHub org/user name.
    projectName: 'ldamle', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ru',
        locales: ['ru']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    id: 'lle', // Unique ID for the first docs instance
                    path: 'docs/lle', // Path to the first set of docs
                    routeBasePath: 'lle', // URL path for the first set
                    sidebarPath: './sidebars.ts' // Path to the sidebar configuration
                },
                theme: {
                    customCss: './src/css/custom.css' // Path to the custom CSS
                }
            }
        ],
        [
            'classic',
            {
                docs: {
                    id: 'stde', // Unique ID for the second docs instance
                    path: 'docs/stde', // Path to the second set of docs
                    routeBasePath: 'stde', // URL path for the second set
                    sidebarPath: './sidebars.ts' // Path to the sidebar configuration (can be the same or different)
                },
                blog: false,
                pages: false,
                debug: false,
                theme: {
                    id: 'stde',
                    customCss: './src/css/custom.css' // Path to the custom CSS
                }
            }
        ]
    ],

    themeConfig: {
        image: 'icons/light-with-text.png',
        navbar: {
            title: 'LDAMLE Docs',
            logo: {
                alt: '',
                src: 'icons/light-without-text.png'
            },
            items: [
                {to: '/lle', label: 'lle', position: 'left'},
                {to: '/docs/ldle', label: 'ldle', position: 'left'},
                {to: '/docs/lmle', label: 'lmle', position: 'left'},
                {to: '/stde', label: 'stde', position: 'left'},
                {
                    href: 'https://github.com/ldamle',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright ${new Date().getFullYear()} pluttan`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.catppuccin
        }
    } satisfies Preset.ThemeConfig
};

export default config;
