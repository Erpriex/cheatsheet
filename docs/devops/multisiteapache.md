# Héberger plusieurs sites web

Grâce aux hôtes virtuels sur Apache, nous allons pouvoir choisir quel site web afficher en fonction du nom de domaine utilisé par le visiteur.

Chaque site possèdera son propre répertoire, sa propre configuration.

<br>

Pour cela, allez dans ce répertoire :
```sh
cd /etc/apache2/sites-available/
```

<br>

Et créez un nouvel hôte virtuel :
```sh
sudo nano 001-site_test.conf
```

<br>

Copiez maintenant cette configuration dans le fichier :
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

Liste des paramètres utilisés :
| Paramètre | Description |
| -------------- | --------------------- |
| `ServerAdmin`  | Adresse email affichée en cas d'erreur |
| `ServerName` | Nom de domaine rattaché à ce site |
| `DocumentRoot` | Répertoire du site |
| `Directory` | Définition des propriétés pour le répertoire |

<br>

Liste des propriétés Directory et Options :
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

Et on enregistre le fichier !

<br>

Maintenant, activez l'hôte virtuel que nous venons de créer
```sh
sudo a2ensite 001-site_test
```

A présent, redémarrons la configuration d'Apache
```sh
sudo service apache2 restart
```

::: tip
Si vous avez commis une erreur dans votre VirtualHost, le redémarrage d'Apache va échouer . Pour afficher l'erreur, utilisez cette commande :
```sh
/usr/sbin/apache2ctl configtest
```
:::