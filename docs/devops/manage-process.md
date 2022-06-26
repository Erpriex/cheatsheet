# Gérer les processus

Dans l'exemple ci-dessous, nous allons arrêter de force un processus.

## Afficher la liste des processus
Dans un premier temps, nous allons afficher la liste des processus en cours d'exécution sur notre machine afin de cibler celui qui nous intéresse.

```sh
# Classé par utilisation du CPU
ps -eo pid,args:60,pcpu,pmem --sort pcpu

# Classé par utilisation de la RAM
ps -eo pid,args:60,pcpu,pmem --sort pmem
```

L'affichage est classé sous forme de tableau [ID, Processus, %CPU, %RAM] :
![](./assets_manage-process/ps_header.png)
![](./assets_manage-process/ps_footer.png)

Dans cet exemple, le process `AskHimAPI` utilise environ 17,1% de la RAM de la machine.

Après avoir identifié le processus que nous souhaitons arrêter, nous allons retenir son ID (première colonne).

## Afficher les informations d'un processus
La commande pour afficher les informations d'un processus est la suivante :
```sh
sudo systemctl status <ID_du_processus>
```

![](./assets_manage-process/status_pid.png)

## Arrêter un processus
Pour arrêter le processus, il suffit d'exécuter la commande suivante :
```sh
sudo kill -9 <ID_du_processus>

# Exemple
sudo kill -9 663
```
Et voilà ! 😎