# Introduction sur les APIs

::: details Sommaire
[[toc]]
:::

## Les APIs en général
Quiconque exerce un métier dans l'IT, a déjà plus ou moins entendu parler d'API. Mais de quoi s'agit-il exactement ?

Une API (Application Programming Interface) est une interface qui va permettre d'échanger des données et/ou des fonctionnalités entre deux programmes.

Le plus souvent, une application client intéragit avec une API pour récupérer et publier des données avec un serveur.

En image, ça donne ça 😅

![](./assets_api/API_Infra.png)

L'API joue un rôle d'intermédiaire entre ces 2 instances.

<br>

La mise en place et l'utilisation d'une API permet plusieurs avantages :
* Centraliser les données échangées, et ainsi de sécuriser les accès des différents clients
* Conserver une traces des différentes requêtes (des logs)
* Facilement pouvoir intéragir avec un système sans se soucier de son fonctionnement
* Et en plus elles sont généralement user-friendly 😉

## Les APIs REST
Une API REST (Representational State Transfer) respecte une architecture dite RESTful, permettant une interaction client-serveur via des requêtes HTTP.

<br>

### Les requêtes HTTP
Chaque requêtes à l'API utilise un type requête HTTP spécifique en fonction de l'action désirée. Voici les plus courantes :
| Méthode | Description |
| -------------- | --------------------- |
| `GET`  | Récupérer une ressource |
| `POST` | Publier une ressource |
| `PUT` | Modifier une ressource |
| `DELETE` | Supprimer une ressource |

<br>

En général, une API REST renvoie les données au format JSON ou XML.

Mais elle retourne également d'autres éléments importants, comme....

<br>

### Les codes retour HTTP
Vous connaissez sûrement l'erreur `404`, et bien il s'agit d'un code retour HTTP ! Mais qu'est-ce que cela signifie exactement ? 🤔

En fonction du traitement d'une requête HTTP, le serveur (ou l'API REST) délivre un code retour qui va informer l'utilisateur si l'exécution de sa requête s'est bien déroulée ou si il y a eu une erreur.

<br>

Un code HTTP est classé parmi 5 catégories, suivant son chiffre des centaines :
* Les codes 100 indiquent une **Information**
* Les codes 200 indiquent un **Succès**
* Les codes 300 indiquent une **Redirection**
* Les codes 400 indiquent une **Erreur côté client**
* Les codes 500 indiquent une **Erreur côté serveur**

<br>

L'erreur 404 est donc une erreur côté client, et il s'agit de l'erreur `NOT FOUND` (Ressource non trouvée).

:::tip
La liste des codes HTTP est disponible [ici](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP#Codes_d'%C3%A9tat)
:::