# Reset CSS

Une bonne pratique en CSS est d'utiliser un fichier de nettoyage afin d'éviter les problèmes de différences entre les navigateurs.

Chaque navigateur prédéfinit pour chaque page sa hauteur de ligne, ses marges, ses en-têtes, etc.. L'utilisation de ce fichier permet de retirer ces configurations.

<br>

Vous pouvez utiliser le fichier `reset.css` de Eric Meyer :

[reset.css](https://meyerweb.com/eric/tools/css/reset/)

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

<br>

Pour utiliser le fichier dans votre projet :

::: warning Attention
Le fichier `reset.css` doit être appelé en premier dans votre projet !
:::

```html
<link rel="stylesheet" 	href="css/reset.css" > <!-- Le reset.css en premier -->
<link rel="stylesheet" 	href="css/styles.css" > <!-- Votre CSS ensuite -->
```