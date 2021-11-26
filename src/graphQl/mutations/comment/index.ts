import {comments} from '../../queries/comment/index'


type Comment = {
  id: string,
  user_id: string,
  content: string,
}


export const CommentMutation = {
  createComment: (_, content) => { 
    comments.push(content)
    console.log(content);
    return comments; 
  },
  deleteComment: (_, data : Comment) => {
    const indexOfCommentToDelete = comments.findIndex(comment => comment.id === data.id)
    console.log('index: ', indexOfCommentToDelete);
    comments.splice(indexOfCommentToDelete, 1)
    return comments
  },
}