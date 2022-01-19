import mongoose, { ObjectId } from 'mongoose';

interface Comment {
  user_id : ObjectId;
  content : string
};

const { Schema } = mongoose;
const CommentSchema = new Schema<Comment>({
  user_id : {type : Schema.Types.ObjectId},
  content : {type : String}

});
export default mongoose.model<Comment>('comment', CommentSchema);