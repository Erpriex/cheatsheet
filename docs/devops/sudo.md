# Sudoers
## Ajouter un utilisateur/groupe dans les sudoers
```sh
# Autoriser toutes les commandes
ctrempe ALL=(ALL:ALL) ALL

# Autoriser seulement des commandes spécifiques
ctrempe ALL=(ALL:ALL) /bin/systemctl start apache2, /bin/systemctl stop apache2

# Autoriser tout un groupe
%mongroupe ALL=(ALL:ALL) ALL
```

<br>


## Retirer la demande du mot de passe de l'utilisateur

```
ctrempe ALL=NOPASSWD: /bin/systemctl start apache2, /bin/systemctl stop apache2
```