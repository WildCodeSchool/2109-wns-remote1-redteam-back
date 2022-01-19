export const types = `
type CommentDefs {
  id: String,
  content : String
}
`

export const queries = `
comments : [CommentDefs]
`

export const mutation = `
createComment(content : String) : [CommentDefs] 
deleteComment(id: String) : [CommentDefs]
`
