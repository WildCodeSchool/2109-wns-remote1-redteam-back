_________________________________________
## Installation du projet 👇🏼

### Cloner le projet 

>https://github.com/WildCodeSchool/2109-wns-remote1-redteam-back.git

### Installer les dépendances 

Toutes les dépendances du projet se trouve dans le fichier package.json 

Lancer la commande : 
``` 
npm install 
```
_________________________________________
## Lancement du projet 👇🏼

### Démarrer 💪🏼
```
yarn run dev
```

Le projet est disponible sur le port 
> http://localhost:4000

_________________________________________

# Structure du projet
## Structure Src

```
|-- src
    |-- api
        |-- comment
            |-- controllers
                \-- comments.ts
            |-- graphQl
                |-- mutations
                    \-- index.ts
                |-- queries
                    \-- index.ts
                |-- schema
                    \-- index.ts
            |-- models
                \-- Comment.ts
            
        |-- project
            |-- controllers
                \-- project.ts
            |-- graphQl
                |-- mutations
                    \-- index.ts
                |-- queries
                    \-- index.ts
                |-- schema
                    \-- index.ts
            |-- models
                \-- Project.ts
            
        |-- task
            |-- controllers
                \-- task.ts
            |-- graphQl
                |-- mutations
                    \-- index.ts
                |-- queries
                    \-- index.ts
                |-- schema
                    \-- index.ts
            |-- models
                \-- Task.ts
                
        |-- user
            |-- controllers
                \-- user.ts
            |-- graphQl
                |-- mutations
                    \-- index.ts
                |-- queries
                    \-- index.ts
                |-- schema
                    \-- index.ts
            |-- models
                \-- User.ts
    |-- schema
            \-- Typedefs.ts
    \-- resolver.ts
    \-- server.ts
    \-- settings.ts
```
_________________________________________
#### Dossier api 🗂
Le dossier API est structuré en plusieurs dossiers: `comment`, `project`, `task`, `user`
Chacun de ces dossiers sont structurés avec les sous dossiers suivant: `controllers`, `graphql` et un dossier `models`

## [Doc API](./doc/api.md)
_________________________________________
#### Dossier schema 🗂
Le dossier schema contient un fichier `typeDefs.ts` qui contiendra toutes nos  définitions des query et mutation GraphQl
