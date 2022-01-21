### Dossier `controllers`: 
Nous retrouvons ici toutes nos fonctions reliées à un endpoint GraphQl. C'est ici que nous allons traiter les données reçues et envoyées ainsi que l'enregistrement en base de données.
Dans chacuns des `controllers`, nous avons défini un type, afin de typer les propriétés de l'objet avec TypeScript, comme le montre l'exemple ci-dessous:
```ts
./src/api/project/controllers/project.ts
=======================

type Project = {
  _id: ObjectId;
  name: string;
  description: string;
  status: string;
  start_date: Date;
  end_date: Date;
  advance_pourcentage: number;
} 
```

### Dossier `graphql`:
Dans le dossier GraphQl, nous avons mis trois sous dossiers `mutations` et `queries` ainsi qu'un dossier `schema`.

Le dossier `schema` regroupe nos Schemas GraphQl. C'est ici que la partie front communiquera avec le backend via des queries et des mutations.

GraphQl à son propre système de typage qui permet de définir le schéma de l'API. La syntaxe pour écrire des schémas s'appelle le SDL (Schema Definition Language).
Une fois que le schéma est défini, comme l'exemple ci-dessous, la communication entre les devs front et back est simplifiée puisque ils sont au courant de la structure des données envoyées via le réseau.


```ts
./src/api/project/graphQl/schema/index.ts

=======================
export const types = `
  type ProjectDefs {
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    tasks : [TaskDefs]
    _id : ID
  }
`

export const queries = `
  projects: [ProjectDefs]
  project(_id : ID): ProjectDefs
`
```

Les dossiers `mutations` et `queries` vont contenir des imports de nos `controllers` et feront le lien avec les requêtes graphql

Exemple:
```ts
./src/api/project/graphQl/mutations/index.ts
=============================================
import {createProject, updateProject, deleteProject} from "../../controllers/project"


const ProjectMutation = {
  createProject,
  updateProject,
  deleteProject
}

export default ProjectMutation;
```
```ts
./src/api/project/graphQl/schema/index.ts
=============================================
export const queries = `
  projects: [ProjectDefs]
  project(_id : ID): ProjectDefs
`

export const mutation = `
  createProject(
    name: String,
    description: String,
    status: String
  ) : ProjectDefs


  updateProject( 
    _id: String,
    name: String, 
    description : String,
    status: String, 
    start_date: String,
    end_date: String,
    advance_pourcentage: Int
    ): ProjectDefs

    deleteProject(
      _id: String
    ) : [ProjectDefs]
`
```

### Dossier `models`: 
```ts
./src/api/project/models/Project.ts
=====================================

import mongoose, { ObjectId } from 'mongoose';

interface Project {
  name : string;
  description: string;
  status : string;
  user_id : ObjectId;
  start_date : Date;
  end_date : Date;
  advance_pourcentage : number;
};

const { Schema } = mongoose;
const ProjectSchema = new Schema<Project>({
  name : {type : String},
  description : {type : String},
  status : {type : String},
  user_id : {type : Schema.Types.ObjectId},
  start_date : {type : Date},
  end_date : {type : Date},
  advance_pourcentage : {type : Number}
});
export default mongoose.model<Project>('project', ProjectSchema);
```

Ici, l'interface correspond au typage imposé par TypeScript.
Ensuite on importe l'objet `Schema` depuis `mongoose` et nous instancions un nouvel objet `ProjectSchema` depuis la classe `Schema` en spécifiant le type que l'on souhaite avec le typage entre <> défini juste avant.

Enfin, on exporte le model mongoose avec le type `Project`. Mongoose s'occupera de créer la table en base de données avec le nom automatiquement au pluriel passé en premier argument (`project`) et le schéma de la table en second argument (`ProjectSchema`);
