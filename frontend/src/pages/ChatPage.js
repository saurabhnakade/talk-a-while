import React, { useEffect, useState } from "react";
import { url } from "../utils/constants";

const ChatPage = () => {
    const [chats,setChats]=useState([]);

    const getChats = async () => {
        const data = await fetch(url+"/api/chat");
        const json=await data.json();
        setChats(json);
    };

    useEffect(() => {
        getChats();
    }, []);

    return <div>
        {chats.map((chat)=><div key={chat._id}>{chat.chatName}</div>)}
    </div>;
};

export default ChatPage;
