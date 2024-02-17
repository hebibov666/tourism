const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
const DataUrl='mongodb+srv://abxalissiracov9900:<password>@obatourism.x0o0k5p.mongodb.net/'
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
mongoose.connect(DataUrl,{
    dbName:'Obatourism',
    user:'abxalissiracov9900',
    pass:'inVpSnPaVsfWsfqC',
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Mongodb connected");
})

const TourRoute=require("./Routes/TourRoute");
app.use("tours",TourRoute)

app.use((req,res,next)=>{
   const err=new Error("Not found");
   err.status=404
})

app.listen(3001,()=>{
    console.log("Server basladi");
})