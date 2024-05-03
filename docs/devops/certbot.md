# Certificat SSL / Certbot

![](./assets_certbot/certbot-logo.png)

<br>

### Mais c'est quoi Certbot ?
Certbot c'est un programme en Python qui va se charger de contacter une autorité de certification, telle que Let's Encrypt, qui va nous délivrer un certificat SSL pour le nom de domaine de notre choix sur notre serveur et ainsi permettre une navigation en HTTPS sur nos sites web.

> La documentation de Certbot est disponible [ici](https://certbot.eff.org/instructions)

<br>

## Installation de Certbot (via SNAP)
Tout d'abord, la première étape est d'installer Certbot sur notre serveur.

Commencez par vérifier que `snapd` est installé sur votre machine :
```sh
sudo snap
```
::: tip
Si 'snapd' n'est pas installé par défaut sur votre distribution, voici la documentation pour l'installer sur votre machine : [Installer snapd](https://snapcraft.io/docs/installing-snapd)
:::

<br>

Vérifions que `snapd` est à jour avec la commande suivante :
```sh
sudo snap install core; sudo snap refresh core
```

<br>

Maintenant, installons Certbot !
```sh
sudo snap install --classic certbot
```

<br>

A présent, il faut préparer l'exécution des commandes Certbot pour que celles-ci se déroulent sans problème :
```sh
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

<br>

## Installation de Certbot (via APT)

```sh
sudo apt-get install certbot

# Plugin de configuration d'Apache
sudo apt-get install python3-certbot-apache
```

## Installer un certificat sur mon nom de domaine

Maintenant ça va être un jeu d'enfant !

Installons un certificat SSL pour le domaine `monsuperdomaine.fr` sur notre serveur :
```sh
# Avec un serveur web sous Apache
sudo certbot --apache -d monsuperdomaine.fr

# Avec un serveur web sous Nginx
sudo certbot --nginx -d monsuperdomaine.fr
```

::: tip
En précisant le paramètre de notre serveur web `--apache` ou `--nginx` dans la commande, Certbot a modifié automatiquement la configuration de notre serveur web.
:::

<br>

Et voilà, le tour est joué ! 😎

::: warning Attention !
Parfois, cela peut prendre plusieurs heures à se mettre en place. Un peu de patience.. 😉
:::