# Certbot

<br>

## Installation de Certbot (via SNAP)
Vérifier que `snapd` est installé sur la machine :
```sh
sudo snap
```
::: tip
Si 'snapd' n'est pas installé par défaut sur votre distribution, voici la documentation pour l'installer sur votre machine : [Installer snapd](https://snapcraft.io/docs/installing-snapd)
:::

<br>

Vérifier que `snapd` est à jour :
```sh
sudo snap install core; sudo snap refresh core
```

<br>

Installation Certbot !
```sh
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

<br>

## Installation de Certbot (via APT)

```sh
sudo apt-get install certbot

# Plugin de configuration d'Apache
sudo apt-get install python3-certbot-apache
```

## Installer un certificat SSL sur un nom de domaine
```sh
# Avec un serveur web sous Apache
sudo certbot --apache -d monsuperdomaine.fr

# Avec un serveur web sous Nginx
sudo certbot --nginx -d monsuperdomaine.fr
```

::: tip
En précisant le paramètre de notre serveur web `--apache` ou `--nginx` dans la commande, Certbot a modifié automatiquement la configuration du serveur web.
:::