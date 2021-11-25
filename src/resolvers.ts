import Task from "./models/Task"

const users = [
  {
    id: "2",
    name: 'Fab',
    project_id: '123345',
    role: 'admin'
  }
]
const comments = [
  {
    id : "1",
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
  },
  {
    id: "2",
    name: "projet 2",
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
    id : "1",
    name: "tache1",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    id : "2",
    name: "tache3",
    description: "il faut faire ça",
    status: "in progress",
    user_id: "toto",
    project_id: "tutu"
  },
  {
    id : "3",
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

type Task = {
  id: string,
  name : string,
  description: string,
  project_id : string,
  status : string,
  user_id : string,
}

type User = {
  id: string,
  name: string,
  password: string,
  email: string,
  role: string,
  project_id: string,
}

type Comment = {
  id: string,
  user_id: string,
  content: string,
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

      updateProject: (_,  data : Project) => {
        console.log(data.id);
        let projectToUpdate = projects.filter(project => project.id === data.id)

        projectToUpdate = {
          ...projectToUpdate,
          ...data
        }
        return projectToUpdate;
      },

      updateTask: (_, data : Task) => {
        console.log(data.id);
        let taskToUpdate = tasksList.filter(task => task.id === data.id);
        taskToUpdate = {
          ...taskToUpdate, 
          ...data
        }
        return taskToUpdate;
      },

      updateUser: (_, data : User) => {
        console.log(data.id);
        let userToUpdate = users.filter(user => user.id === data.id)

        userToUpdate = {
          ...userToUpdate,
          ...data
        }
        return userToUpdate
      },

      deleteTask: (_, data: Task) => {
        const indexOfTaskToDelete = tasksList.findIndex(task => task.id === data.id);
        console.log(indexOfTaskToDelete);
        tasksList.splice(indexOfTaskToDelete, 1);
        return tasksList;
      },

      deleteComment: (_, data : Comment) => {
        const indexOfCommentToDelete = comments.findIndex(comment => comment.id === data.id)
        console.log('index: ', indexOfCommentToDelete);
        comments.splice(indexOfCommentToDelete, 1)
        return comments
      },

      deleteProject : (_, data : Project) => {
        const selectIndexToDelete = projects.findIndex(project => project.id === data.id)
        projects.splice(selectIndexToDelete, 1)
      
        return projects;
      }

    }
  };
 export default resolvers;