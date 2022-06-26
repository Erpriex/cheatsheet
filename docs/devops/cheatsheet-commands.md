# Cheatsheet de commandes

::: details Table des matières
[[toc]]
:::

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