const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
    lang: 'fr-FR',
    title: 'CheatSheet',
    description: 'Cette documentation est un aide-mémoire qui aborde différentes notions de développement et d\'administration système',
  
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
            { text: 'Devblog', link: 'https://blog.ctrempe.fr' },
            { text: 'Portfolio', link: 'https://ctrempe.fr' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            { link: "/ressources.md", text: "Ressources" },
            {
                text: "DevOps",
                collapsible: true,
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
                    {
                        text: "APT",
                        collapsible: true,
                        children: [
                            { link: "/devops/apt/sources.md", text: "Sources APT par défaut" },
                        ]
                    },
                    { link: "/devops/certbot.md", text: "Installer un certificat SSL (HTTPS)" },
                    {
                        text: "Jenkins",
                        collapsible: true,
                        children: [
                            { link: "/devops/jenkins/install-jenkins.md", text: "Introduction et installation de Jenkins" }
                        ]
                    }
                ]
            },
            {
                text: "HTML / CSS",
                collapsible: true,
                children: [
                    { link: "/html-css/reset-css.md", text: "Nettoyage CSS" }
                ]
            },
            {
                text: "Les APIs",
                collapsible: true,
                children: [
                    { link: "/apis/apis.md", text: "Introduction sur les APIs" }
                ]
            },
            {
                text: "Aides mémoires",
                collapsible: true,
                children: [
                    { link: "/cheatsheet/git.md", text: "Git" },
                    { link: "/cheatsheet/sql.md", text: "SQL" },
                    { link: "/cheatsheet/docker.md", text: "Docker" }
                ]
            },
        ]
    }),
}