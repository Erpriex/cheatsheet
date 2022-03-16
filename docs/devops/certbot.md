# Installer un certificat SSL avec Certbot (HTTPS)

### Mais c'est quoi Certbot ?
Certbot c'est un programme en Python qui va se charger de contacter une autorité de certification, telle que Let's Encrypt, qui va nous délivrer un certificat SSL pour le nom de domaine de notre choix sur notre serveur.

> La documentation de Certbot est disponible [ici](https://certbot.eff.org/instructions)

<br>

Dans cet exemple, notre serveur web fonctionnera avec Apache et l'OS utilisé sera Ubuntu.

<br>

## Installation de Certbot
Tout d'abord, la première étape est d'installer Certbot sur notre serveur.

Commencez par vérifier que `snapd` est installé sur votre machine :
```sh
$ sudo snap
```
::: tip
Si 'snapd' n'est pas installé par défaut sur votre distribution, voici la documentation pour l'installer sur votre machine : [Installer snapd](https://snapcraft.io/docs/installing-snapd)
:::

<br>

Vérifions que `snapd` est à jour avec la commande suivante :
```sh
$ sudo snap install core; sudo snap refresh core
```

<br>

Maintenant, installons Certbot !
```sh
$ sudo snap install --classic certbot
```

<br>

A présent, il faut préparer l'exécution des commandes Certbot pour que celles-ci se déroulent sans problème :
```sh
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

<br>

## Installer un certificat sur mon nom de domaine

Maintenant ça va être un jeu d'enfant !

En parallèle à l'installation du certificat SSL, Certbot peut se charger de configurer notre serveur web automatiquement pour la prise en charge du certificat.

Installons un certificat SSL pour le domaine `monsuperdomaine.fr` sur notre serveur :
```sh
# Avec un serveur web sous Apache
$ sudo certbot --apache -d monsuperdomaine.fr

# Avec un serveur web sous Nginx
$ sudo certbot --nginx -d monsuperdomaine.fr
```

Et voilà, le tour est joué ! 😎

::: warning Attention !
Parfois, cela peut prendre plusieurs heures à se mettre en place. Un peu de patience.. 😉
:::

Certbot a également modifié la configuration de notre serveur web pour rediriger automatiquement en HTTPS lorsque une personne tente de consulter notre site en HTTP.