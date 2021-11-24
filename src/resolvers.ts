
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
    name: "projet 1",
    description: "description projet 1",
    status: "Non fini",
    start_date: "24-11-2021",
    end_date: "26-11-2021",
    advance_pourcentage: "90",
    tasks : [
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
  }
]

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
      createComment: (content) => { 
        comments.push(content)
        console.log(content) 
    }
    }
  };
 export default resolvers;