import mongoose,{Schema,Document} from "mongoose";


export interface ITask extends Document{
   title: string;
   completed: boolean;
   userEmail:string; 
}

const TaskSchema = new Schema <ITask>({
    title:{type:String, required:true},
    completed:{type: Boolean, default:false},
    userEmail:{type:String, required:true},
});

export default  mongoose.models.Task || mongoose.model<ITask>('Task',TaskSchema);