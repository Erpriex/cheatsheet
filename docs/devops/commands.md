# Commandes

::: tip Table des matières
[[toc]]
:::

## Linux

### Afficher la liste des processus
```sh
# Classé par utilisation du CPU
ps -eo pid,args:60,pcpu,pmem --sort pcpu

# Classé par utilisation de la RAM
ps -eo pid,args:60,pcpu,pmem --sort pmem
```

### Monitorer les processus et les ressources (outil HTOP)
```sh
htop
```
L'article d'IT-CONNECT documente bien la prise en main de l'outil : [lien](https://www.it-connect.fr/visualiser-et-gerer-les-processus-sous-linux-avec-htop/)

### Télécharger un fichier/dossier via SSH (depuis sur un serveur distant)
```sh
# Un fichier
scp user@ip:/path/to/file.txt ./file.txt

# Un dossier
scp -r user@ip:/path/to/folder ./folder
```

### Arrêter de force un processus
```sh
sudo kill -9 <ID_du_processus>

# Exemple
sudo kill -9 663
```

### Installer les prérequis pour les guest additions VirtualBox
```sh
sudo apt-get install build-essential linux-headers-`uname -r` dkms
```

<br>

## Git

### Rollback un repo
```sh
git reset --hard <old-commit-id>
git push -f <remote-name> <branch-name>
```

### Fake delete
```sh
# Un fichier
git rm --cached file.txt

# Un dossier
git rm --cached -r leDossier/
```

<br>

## MySQL

### Créer un utilisateur
```sh
# Autorise la connexion depuis localhost uniquement
CREATE USER 'sammy'@'localhost' IDENTIFIED BY 'password';

# Autorise la connexion depuis toutes les IP
CREATE USER 'sammy'@'%' IDENTIFIED BY 'password';
```

### Accorder des permissions à un utilisateur
```sh
# Accorder toutes les permissions sur une base de données
GRANT ALL PRIVILEGES ON database.* TO 'username'@'host';

# Accorder toutes les permissions sur toutes les bases de données
GRANT ALL PRIVILEGES ON * . * TO 'username'@'host';

FLUSH PRIVILEGES;
```

<br>

## Docker

### Supprimer les images et conteneurs inutilisées
```sh
docker system prune
docker system prune -a

docker volume prune
docker volume prune -a
```