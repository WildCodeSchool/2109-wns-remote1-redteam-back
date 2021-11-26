import mongoose, { ObjectId } from 'mongoose';


interface User {
  name : string;
  password: string;
  email : string;
  role : string;
  project_id : ObjectId
}

const { Schema } = mongoose;
const UserSchema = new Schema<User>({
  name : {type : String},
  password : {type : String},
  email : {type : String},
  role : {type : String},
  project_id : {type : Schema.Types.ObjectId},

});
export default mongoose.model<User>('user', UserSchema);