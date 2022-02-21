import mongoose, { ObjectId } from 'mongoose';

interface Project {
  name : string;
  description: string;
  status : string;
  user_id : ObjectId;
  start_date : string;
  end_date : string;
  advance_pourcentage : number;
};

const { Schema } = mongoose;
const ProjectSchema = new Schema<Project>({
  name : {type : String},
  description : {type : String},
  status : {type : String},
  user_id : {type : Schema.Types.ObjectId},
  start_date : {type : String},
  end_date : {type : String},
  advance_pourcentage : {type : Number}
});
export default mongoose.model<Project>('project', ProjectSchema);