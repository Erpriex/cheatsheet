const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
    lang: 'fr-FR',
    title: 'CheatSheet',
    description: 'Cette documentation est un aide-mémoire qui aborde différentes notions de DevOps',
  
    head: [
        ['meta', { name: 'theme-color', content: '#3aa675' }]
    ],

    plugins: [
        searchPlugin({
            locales: {
                "/": {
                    placeholder: "Rechercher",
                },
            },
        }),
        googleAnalyticsPlugin({ 'id': 'G-ZL3F7HZREL' }),
    ],

    theme: defaultTheme({
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        navbar: [
            { text: 'Portfolio', link: 'https://ctrempe.fr' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            { link: "/ressources.md", text: "Ressources" },
            {
                text: "DevOps",
                collapsible: false,
                children: [
                    { link: "/devops/commands.md", text: "Commandes" },
                    { link: "/devops/sudo.md", text: "Sudoers" },
                    { link: "/devops/virtualhost.md", text: "VirtualHosts" },
                    { link: "/devops/certbot.md", text: "Certificat SSL / Certbot" },
                    { link: "/devops/update-nextcloud.md", text: "Mettre à jour Nextcloud" },
                    { link: "/devops/install-jenkins.md", text: "Installation de Jenkins" }
                ]
            },
            {
                text: "HTML / CSS",
                collapsible: false,
                children: [
                    { link: "/html-css/reset-css.md", text: "Nettoyage CSS" }
                ]
            },
        ]
    }),
}