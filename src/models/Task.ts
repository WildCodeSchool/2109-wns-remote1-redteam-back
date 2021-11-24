import mongoose, { ObjectId } from 'mongoose';

interface Task {
  name : string;
  description: string;
  project_id : ObjectId;
  status : string;
  user_id : ObjectId;
};

const { Schema } = mongoose;
const TaskSchema = new Schema<Task>({
  name : {type : String},
  description : {type : String},
  status : {type : String},
  user_id : {type : Schema.Types.ObjectId},
  project_id : {type : Schema.Types.ObjectId},

});
export default mongoose.model<Task>('task', TaskSchema);