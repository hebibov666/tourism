const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const TourSchema= new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true,
        },
        type:{
            type:String,
        },
        price:{
type:String
        },
        image: {
            type: [String],
        }
    },
    {
        suppressReservedKeysWarning: true, 
    }
);
const Tour=mongoose.model('tours',TourSchema);
module.exports=Tour