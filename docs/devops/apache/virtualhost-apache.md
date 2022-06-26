# Héberger plusieurs sites web

Grâce aux hôtes virtuels sur Apache, nous allons pouvoir choisir le site web afficher en fonction du nom de domaine saisi par le visiteur.

Chaque site possèdera son propre répertoire, sa propre configuration.

<br>

L'heure est venu de créer notre premier Virtual Host sur Apache, c'est parti !

Pour commencer, allez dans le répertoire des Virtual Hosts d'Apache :
```sh
cd /etc/apache2/sites-available/
```

<br>

Et créez un nouveau fichier de configuration d'hôte virtuel :
```sh
sudo nano 001-site_test.conf
```

<br>

Copiez maintenant cette configuration d'exemple : [lien](https://cheatsheet.trempe.dev/devops/apache/virtualhost-examples.html#le-classique)

Et on enregistre le fichier !

<br>

Maintenant, activez l'hôte virtuel que nous venons de créer
```sh
sudo a2ensite 001-site_test
```

<br>

Parfait, ça devra faire l'affaire ! 👌<br>Redémarrons la configuration d'Apache
```sh
sudo service apache2 restart
```

::: tip
Si vous avez commis une erreur dans votre VirtualHost, le redémarrage d'Apache va échouer . Pour afficher l'erreur, utilisez cette commande :
```sh
/usr/sbin/apache2ctl configtest
```
:::