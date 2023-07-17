import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {

    const [chats,setChats]=useState([])
    const fetchChats =async()=>{
        const data = await axios.get('/api/chat');
        // console.log(data);
        setChats(data.data);
    }

    useEffect(()=>{
        fetchChats();
    },[])

  return (
   <div>
    ChatPage123
    {
        
        chats.map((e)=>{
            return <div key={e._id}>
                {e.chatName}
            </div>
        })

    }
    
    
   </div>
  );
}

export default ChatPage
