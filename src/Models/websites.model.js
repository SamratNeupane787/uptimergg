import mongoose,{Schema} from "mongoose";

const websiteSchema = new Schema({
  websiteLink:{
    type:String,
    required: true,
  },
  email:{
    type:String,
    required:true,
  }

},{
  timestamps:true
})


export const websiteAdd = mongoose.models.websiteAdd || mongoose.model("websiteAdd", websiteSchema)