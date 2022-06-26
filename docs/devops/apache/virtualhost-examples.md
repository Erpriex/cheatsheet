# Exemples de Virtual Hosts

::: details Table des matières
[[toc]]
:::

## Le classique
```
<VirtualHost *:80>

    ServerAdmin webmaster@localhost
    ServerName test.ctrempe.fr

    DocumentRoot /var/www/html/site_test

    <Directory /var/www/html/site_test>
        AllowOverride All
        Options -Indexes +FollowSymLinks
    </Directory>

</VirtualHost>
```

<br>

Voici une liste de quelques paramètres utiles :
| Paramètre | Description |
| -------------- | --------------------- |
| `ServerAdmin`  | Adresse email affichée en cas d'erreur |
| `ServerName` | Nom de domaine rattaché à ce site |
| `DocumentRoot` | Répertoire du site |
| `Directory` | Définition des propriétés pour le répertoire |

<br>

Liste d'exemples de propriétés Directory et Options :
| Propriété | Description |
| -------------- | --------------------- |
| `AllowOverride`  | Autoriser la modification de la configuration avec un fichier .htaccess |
| `Indexes` | Lister les fichiers du répertoire |
| `FollowSymLinks` | Autoriser le suivi des liens symbolique |

<br>

::: tip
En préfixe des options, ajoutez un **+** pour activer la propriété, et un **-** pour la désactiver.
Exemple ci-dessus : `Options -Indexes +FollowSymLinks`
:::

<br>

## Proxy
```
<VirtualHost *:80>
        ProxyPreserveHost On
        ProxyRequests Off
        ServerName test.ctrempe.fr
        ProxyPass / http://monsupersite.fr:8080/
        ProxyPassReverse / http://monsupersite.fr:8080/
</VirtualHost>
```
::: warning Et n'oubliez pas !
Pensez à activer le module proxy d'Apache 😉
```sh
sudo a2enmod proxy proxy_http
```
:::