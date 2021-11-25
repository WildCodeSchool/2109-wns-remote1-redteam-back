
const users = [
  {
    name: 'Fab',
    project_id: '123345',
    role: 'admin'
  }
]
const comments = [
  {
    content: "Bla bal bla ",
  },
  {
    content : "salut je suis un commentaire 1",
  }
]


const projects = [
  {
    id: "1",
    name: "projet 1",
    description: "description projet 1",
    status: "Non fini",
    start_date: "24-11-2021",
    end_date: "26-11-2021",
    advance_pourcentage: "90",
    tasks : [
      {
        id: "1",
        name: "tache1",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "2",
        name: "tache3",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      },
      {
        id: "3",
        name: "tache4",
        description: "il faut faire ça",
        status: "in progress",
        user_id: "toto",
        project_id: "tutu"
      }
    ]
  }
]
const tasksList = [
  {
    name: "tache1",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    name: "tache3",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    name: "tache4",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  }
]

type Project = {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  advance_pourcentage: string;
}

 const resolvers = {
    Query: {
      users: () => users,
      comments: () => comments,
      projects: () => projects,
      tasks: () => {
        const tasks = projects.map(project => project.tasks.map(task => task))
        console.log(tasks)
        return tasks[0]
      }
    },
    Mutation: {
      createComment: (_, content) => { 
        comments.push(content)
        console.log(content);
        return comments; 
      },

      createProject: (_, project) => {
        console.log(project);
        projects.push(project);
        return projects;
      },

      createUser: (_, user) => {
        console.log(user);
        users.push(user);
        return users;
      },

      createTask: (_, task) => {
        console.log(task);
        tasksList.push(task);
        return tasksList;
      },

     

      updateProject: (_,  data : any) => {
        console.log(data.data.id);
        let projectToUpdate = projects.filter(project => project.id === data.data.id)

        projectToUpdate = {
          ...projectToUpdate,
          ...data.data
        }
        return projectToUpdate;
      }
    }
  };
 export default resolvers;