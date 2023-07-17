const  mongoose = require('mongoose')

const UserModel =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true,
        default:"https://i.pinimg.com/originals/4a/90/19/4a9019fbeb9799a1a0c1c3c103353ded.jpg" 
    }
    
},
    {
    timestamps:true
    }
);

const User = mongoose.model("Chat",UserModel);

module.export =  {User};

