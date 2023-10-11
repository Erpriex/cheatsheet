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
                    { link: "/devops/cheatsheet-commands.md", text: "Cheatsheet de commandes" },
                    { link: "/devops/sudo.md", text: "Configurer les sudoers (sudo)" },
                    {
                        text: "Apache",
                        collapsible: true,
                        children: [
                            { link: "/devops/apache/virtualhost-apache.md", text: "Héberger plusieurs sites web" },
                            { link: "/devops/apache/virtualhost-examples.md", text: "Exemples de Virtual Hosts" },
                        ]
                    },
                    { link: "/devops/certbot.md", text: "Installer un certificat SSL (HTTPS)" },
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