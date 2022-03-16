module.exports = {
    // site config
    lang: 'fr-FR',
    title: 'Cheatsheet',
    description: 'Cette documentation est un aide-mémoire qui recense différentes notions de développement et d\'administration système.',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        //logo: 'https://vuejs.org/images/logo.png'
        displayAllHeaders: true,
        lastUpdatedText: 'Mis à jour le',
        contributorsText: "Contributeurs",
        navbar: [
            { text: 'Accueil', link: '/' }
        ],
        sidebar: [
            { link: "/README.md", text: "Introduction" },
            {
                text: "DevOps",
                collapsible: true,
                children: [
                { link: "/devops/certbot.md", text: "Installer un certificat SSL avec Certbot (HTTPS)" }
                ]
            }
        ]
    },
  }