# Configurer les sudoers (sudo)

La commande `sudo` permet à un utilisateur d'exécuter une commande en tant que 'root' (super utilisateur).

Elle est installée par défaut sur certaines distributions comme Ubuntu, mais parfois ce n'est pas forcément le cas comme sur Debian.

## Installation de sudo
Tout d'abord, commençons par passer en root :
```sh
su -
```

<br>

Maintenant, installons sudo :
```sh
# En root
apt-get install sudo
```

## Editer le fichier de configuration de sudo
Le fichier de configuration de sudo se trouve dans `/etc/sudoers`. Ouvrons-le avec un éditeur de texte :

```sh
# Avec Nano :
nano /etc/sudoers

# Avec Vim :
vi /etc/sudoers
```

![](./assets_sudo/sudoersfile.png)


## Ajouter un utilisateur dans les sudoers
Notre objectif est maintenant de donner la permission à l'utilisateur `ctrempe` d'exécuter des commandes en sudo.

Pour cela, ajoutons cette ligne dans le fichier de configuration :
```
ctrempe ALL=(ALL:ALL) ALL
```

<br>

Notre configuration doit maintenant ressembler à ceci :


![](./assets_sudo/usersudoers.png)


::: tip
Après avoir fermé l'éditeur de texte, les permissions sont immédiatement appliquées sur notre utilisateur. Un message de prévention apparaît lors de la première commande exécutée en sudo

![](./assets_sudo/testsudo.png)
:::

<br>

Et voilà, nous venons d'ajouter l'utilisateur `ctrempe` dans les sudoers 😄


## Ajouter un groupe dans les sudoers
Pour nous faciliter la vie, nous pouvons accorder la permission pour l'ensemble des utilisateurs d'un groupe.

La ligne reste la même que pour les utilisateurs, il faut simplement rajouter un `%` en préfixe pour cibler un groupe.

Exemple avec le groupe `admin` :

```
%admin  ALL=(ALL:ALL) ALL
```

Ce qui nous donne :

![](./assets_sudo/groupsudoers.png)

Et oui, c'est aussi simple que ça 👌

::: tip Rappel
La commande pour ajouter un utilisateur dans un groupe :

```sh
# En root, dans /root
adduser ctrempe sudo
```
*Ici, nous avons ajouté l'utilisateur `ctrempe` dans le groupe `admin`*
:::

# Retirer la demande du mot de passe de l'utilisateur

::: danger Alors là, attention attention !!
Nous sommes d'accord sur le fait que cette pratique est dangereuse en terme de sécurité.
<br>
Privilégiez cette solution uniquement lorsque la commande est exécutée par un programme. Et assurez-vous de créer un utilisateur spécifiquement pour ce service (sans autre permission supplémentaire).
:::

<br>

Et oui, il est possible de faire en sorte que le système ne demande pas le mot de passe de l'utilisateur lors de l'exécution d'une commande en sudo.

Pour cela, nous allons préciser dans la configuration que l'utilisateur `ctrempe` est seulement autorisé à exécuter une commande spécifique sans demander le mot de passe.

<br>

Il suffit de préciser ces paramètres dans le fichier de configuration :

```
rebootauto ALL=NOPASSWD: /bin/systemctl restart apache2
```

::: tip
Nous pouvons définir plusieurs commandes, pour cela il suffit de les séparer par une virgule **,**

```
rebootauto ALL=NOPASSWD: /bin/systemctl restart apache2, /bin/systemctl restart mysql
```
:::