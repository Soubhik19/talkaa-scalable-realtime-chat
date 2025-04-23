'use client';
import React, { createContext, useContext, useEffect, useState ,useCallback} from 'react';
import { io} from 'socket.io-client';

interface SocketproviderProps{
    children: React.ReactNode;
}
interface ISocketContext{
sendMessege:(msg:string)=>any;
}

const SocketContext=React.createContext<ISocketContext | null>(null);



export const SocketProvider:React.FC<SocketproviderProps>=({children})=>{
    const sendMessege:ISocketContext["sendMessege"]=useCallback((msg: any)=>{
        console.log("send messege",msg);
    },[]);

    useEffect(()=>{
        const _socket=io("http://localhost:8000");


        return ()=>{
            _socket.disconnect();
        }
        
    },[]);




    return (
        <SocketContext.Provider value={null}>
            {children}
        </SocketContext.Provider>
    )
} 
