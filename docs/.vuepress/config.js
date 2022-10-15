const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
    lang: 'fr-FR',
    title: 'CheatSheet',
    description: 'Cette documentation est un aide-mémoire qui recense différentes notions de DevOps',
  
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
            { text: 'Devblog', link: 'https://blog.trempe.dev' },
            { text: 'Portfolio', link: 'https://ctrempe.fr' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            { link: "/ressources.md", text: "Ressources" },
            {
                text: "Aides mémoires",
                collapsible: true,
                children: [
                    { link: "/cheatsheet/git.md", text: "Git" },
                    { link: "/cheatsheet/sql.md", text: "SQL" }
                ]
            },
            {
                text: "DevOps",
                collapsible: true,
                children: [
                    { link: "/devops/cheatsheet-commands.md", text: "Cheatsheet de commandes" },
                    { link: "/devops/sudo.md", text: "Configurer les sudoers (sudo)" },
                    { link: "/devops/manage-process.md", text: "Gérer les processus" },
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
                text: "Les APIs",
                collapsible: true,
                children: [
                    { link: "/apis/apis.md", text: "Introduction sur les APIs" },
                    {
                        text: "SpringBoot",
                        collapsible: true,
                        children: [
                            { link: "/apis/springboot/firstproject-springboot.md", text: "Créer une API avec SpringBoot" }
                        ]
                    }
                ]
            }
        ]
    }),
}