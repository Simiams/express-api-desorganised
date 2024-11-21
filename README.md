## Identifiez les  d'organisation  ce code
- Tout le code est dans un même fichier => Plus dur à maintenir et moins lisible
- Les méthodes font trop de trucs

## Nouvelle orga
Création de dossier:
- routes => Gère tous nos endpoints
- repositories => Gère les requêtes sql
- configuration => Gère la configuration de notre db
- app.js => Permet uniquement de setup notre serveur

## Caractéristiques de la nouvelle orga
- Plus lisible, plus simple à maintenir
- Le code est divisé par logique

## Bonus
On pourrait imaginer une couche service entre notre controller et notre repository