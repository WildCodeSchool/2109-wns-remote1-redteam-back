import mongoose, { ObjectId } from 'mongoose';

interface Project {
  name : string;
  description: string;
  status : string;
  user_id : ObjectId;
  start_date : Date;
  end_date : Date;
  advance_pourcentage : number;
};

const { Schema } = mongoose;
const ProjectSchema = new Schema<Project>({
  name : {type : String},
  description : {type : String},
  status : {type : String},
  user_id : {type : Schema.Types.ObjectId},
  start_date : {type : Date},
  end_date : {type : Date},
  advance_pourcentage : {type : Number}
});
export default mongoose.model<Project>('project', ProjectSchema);