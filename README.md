## Identifiez les problèemes d'organisation du ce code
- Tout le code est dans un même fichier => Plus dur a maintenir et moins lisible
- Ls méthodes font trop de truc

## Nouvelle orga
Création de dosser:
- routes => Gére tout nos endpoints
- repositories => Gère les requete sql
- configuration => Gère la configuration de notre db
- app.js => Permet uniquement de setup notre serveur

## Caractéristique de la nouvelle orga
- Plus lisible, plus simple a maintenir
- Le code est divisé par logique