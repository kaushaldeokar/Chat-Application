const  mongoose = require('mongoose')

const chatModel =mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[
        {
            // points to object of user model or some user
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
},
    {
    timestamps:true
    }
);

const Chat = mongoose.model("Chat",chatModel);

module.export =  {Chat};

