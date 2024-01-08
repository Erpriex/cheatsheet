# VirtualHosts

::: tip Table des matières
[[toc]]
:::

## Le classique
```
<VirtualHost *:80>

    ServerName test.ctrempe.fr

    DocumentRoot /var/www/html/site_test

    <Directory /var/www/html/site_test>
        Options -Indexes +FollowSymLinks
    </Directory>

</VirtualHost>
```

Liste non-exhaustive des options du Directory :
| Type | Propriété | Description |
| --------------------- | --------------------- | --------------------- |
| Propriété | `AllowOverride All`  | Autoriser la modification de la configuration avec un fichier .htaccess |
| Propriété | `Require all granted`  | Autoriser toutes les requêtes vers le répertoire souhaité |
| Options | `Indexes` | Lister les fichiers du répertoire |
| Options | `FollowSymLinks` | Autoriser le suivi des liens symbolique |

::: tip
En préfixe des options, ajoutez un **+** pour activer la propriété, et un **-** pour la désactiver.
Exemple ci-dessus : `Options -Indexes +FollowSymLinks`
:::

<br>

## Reverse proxy
```
<VirtualHost *:80>
        ProxyPreserveHost On
        ProxyRequests Off
        ServerName test.ctrempe.fr
        ProxyPass / http://monsupersite.fr:8080/
        ProxyPassReverse / http://monsupersite.fr:8080/
</VirtualHost>
```

::: tip Et n'oubliez pas !
Pensez à activer le module proxy d'Apache 😉
```sh
sudo a2enmod proxy proxy_http
```
:::

::: warning Transmission HTTPS
Ajouter la ligne `RequestHeader set X-Forwarded-Proto "https"` permet d'assurer la transmission HTTPS vers le serveur distant
:::

<br>

## Redirection
```
<VirtualHost *:80>
        ServerName test.ctrempe.fr
        RedirectMatch 302 ^/(.*)$ http://google.com
</VirtualHost>
```

::: tip Et pour les routes ?
Ajouter `$1` à la fin de l'URL permet d'ajouter les routes dans la redirection<br>
Exemple : `http://google.com/$1`
:::