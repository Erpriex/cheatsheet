# Gérer les processus

Il arrive parfois qu'un processus ne répond plus, ou que le serveur soit saturé par manque de ressource.
Dans ce cas là, nous souhaitons arrêter de force un processus.

## Afficher la liste des processus
Dans un premier temps, nous allons afficher la liste des processus en cours d'exécution sur notre machine.

Afficher la liste des processus [ID, Processus, %CPU, %RAM] :
```sh
# Classé par utilisation du CPU
ps -eo pid,args:60,pcpu,pmem --sort pcpu

# Classé par utilisation de la RAM
ps -eo pid,args:60,pcpu,pmem --sort pmem
```

Après avoir identifié le processus que nous souhaitons arrêter, nous allons retenir son ID (première colonne).

## Arrêter un processus
Il est maintenant temps d'arrêter notre processus :
```sh
sudo kill -9 <ID_du_processus>

# Exemple
sudo kill -9 1226
```
Et voilà qui est fait ! 😎