# Configurer les sudoers

La commande `sudo` permet à un utilisateur d'exécuter une commande en tant que 'root' (super utilisateur).

Le fichier de configuration de sudo se trouve dans `/etc/sudoers`


![](./assets_sudo/sudoersfile.png)


## Ajouter un utilisateur/groupe dans les sudoers
Modifiez le fichier de configuration :
```sh
# Autoriser toutes les commandes
ctrempe ALL=(ALL:ALL) ALL

# Autoriser seulement des commandes spécifiques
ctrempe ALL=(ALL:ALL) /bin/systemctl start apache2, /bin/systemctl stop apache2

# Autoriser tout un groupe
%mongroupe  ALL=(ALL:ALL) ALL
```


::: tip
Après avoir enregitré les modifications apportées sur le fichier, les permissions sont immédiatement appliquées sur notre utilisateur. Un message de prévention apparaît lors de la première commande exécutée en sudo

![](./assets_sudo/testsudo.png)
:::

<br>


## Retirer la demande du mot de passe de l'utilisateur

::: danger Pas très cybersécurité tout ça !
Effectivement, cela retire une couche de sécurité. Mais je vous montre l'astuce quand même 🤡
:::

<br>

Et oui, il est possible de faire en sorte que le mot de passe de l'utilisateur ne soit pas demandé lors de l'exécution d'une commande en sudo.
```
ctrempe ALL=NOPASSWD: /bin/systemctl start apache2, /bin/systemctl stop apache2
```