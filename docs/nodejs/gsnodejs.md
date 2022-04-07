# Prise en main de NodeJS

## Présentation de NodeJS
NodeJS est un environnement open-source qui va nous permettre d'exécuter du JavaScript côté serveur et d'intéragir facilement avec différentes librairies et APIs, car il possède son propre gestionnaire de paquets : [NPM](https://www.npmjs.com/)

<br>

## Installation de NodeJS
### Sur Windows et MacOS
Ici, c'est facile ! Il suffit de télécharger l'installateur sur votre machine et de suivre les étapes ! 👌

> Site officiel de [NodeJS](https://nodejs.org/en/)

### Sur Linux
Ici, nous allons devoir installer NodeJS par le gestionnaire de paquets.

> La documentation fournie par NodeJS est disponible [ici](https://nodejs.org/en/download/package-manager/)

<br>

Voici les commandes d'installation de NodeJS sur Ubuntu et sur Debian :

*Avec Ubuntu :*
```sh
$ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

*Avec Debian, en root :*
```
# curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
# apt-get install -y nodejs
```

<br>

## Premier projet avec NodeJS

::: warning In work...
:::

Maintenant, place à la pratique ! Créons ensemble une application web sur NodeJS avec le framework [ExpressJS](https://www.npmjs.com/package/express).

### Création de la structure du projet

Après avoir créé le dossier du projet, exécutez la commande suivante à l'intérieur de celui-ci :

```sh
npm init
```

Appuyez sur 'Entrée' pour tous les champs demandé.

NodeJS a maintenant créé un fichier `package.json` à la racine de notre projet.

Maintenant, créons un fichier `index.js`, et copiez/collez cette ligne à l'intérieur de celui-ci :

```js
console.log("Hello world !\nJe suis un premier projet avec NodeJS :)");
```

Il est maintenant temps d'exécuter notre programme ! Exécutez la commande suivante :

```sh
node index.js
```