# Cheatsheet de commandes

::: details Table des matières
[[toc]]
:::

## Linux

### Supprimer un dossier non vide
```sh
sudo rm -rf MonSuperDossier/
```

### Rendre un script exécutable
```sh
sudo chmod u+x monsuperscript.sh
```

### Afficher la liste des processus
```sh
# Classé par utilisation du CPU
ps -eo pid,args:60,pcpu,pmem --sort pcpu

# Classé par utilisation de la RAM
ps -eo pid,args:60,pcpu,pmem --sort pmem
```

### Télécharger un fichier/dossier via SSH (depuis sur un serveur distant)
```sh
# Un fichier
scp user@ip:/path/to/file.txt ./file.txt

# Un dossier
scp -r user@ip:/path/to/folder ./folder
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