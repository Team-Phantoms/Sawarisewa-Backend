const mongoose =require('mongoose');
const WorkHistory =mongoose.model("Workhistory",{
    problemtype:{
        type:String
    },
    address:{
        type:String
    },
    lat:{
        type:String
    },
    long:{
        type:String
    },
    clusername:{
        type:String
    },
    mechusername:{
        type:String
    },
    mechphone:{
        type:String
    },
    accepted:{
        type:String,
        default:false
    },
    rejected:{
        type:String,
        default:false
    }
})
module.exports=WorkHistory;