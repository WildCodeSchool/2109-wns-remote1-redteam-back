const comments = [
  {
    id : "1",
    content: "Bla bal bla ",
  },
  {
    content : "salut je suis un commentaire 1",
  }
]

type Comment = {
  id: string,
  user_id: string,
  content: string,
}


export const getAllComments = () => comments;

export const createComment = (_, content) => {
  comments.push(content)
  console.log(content);
  return comments; 
}

export const deleteComment = (_, data : Comment) => {
  const indexOfCommentToDelete = comments.findIndex(comment => comment.id === data.id)
    console.log('index: ', indexOfCommentToDelete);
    comments.splice(indexOfCommentToDelete, 1)
    return comments
}