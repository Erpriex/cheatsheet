module.exports = {
    // site config
    lang: 'fr-FR',
    title: 'CheatSheet',
    description: 'Cette documentation est un aide-mémoire qui recense différentes notions de développement et d\'administration système.',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        //logo: 'https://vuejs.org/images/logo.png'
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        navbar: [
            { text: 'Portfolio', link: 'https://ctrempe.fr' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "DevOps",
                collapsible: true,
                children: [
                    { link: "/devops/certbot.md", text: "Installer un certificat SSL (HTTPS)" },
                    { link: "/devops/configsudo.md", text: "Configurer les sudoers (sudo)" },
                    { link: "/devops/manageprocess.md", text: "Gérer les processus" },
                    { link: "/devops/cmdcs.md", text: "Cheatsheet de commandes" }
                ]
            },
            {
                text: "NodeJS",
                collapsible: true,
                children: [
                    { link: "/nodejs/libsutils.md", text: "Quelques librairies utiles" }
                ]
            }
        ]
    },
  }