import { Server } from "socket.io";

class SocketService {
    private _io:Server;
    constructor() {
        console.log("Init socket services...");
        this._io = new Server();     //socket io server initialize 
    }



    
    
   get io(){
        return this._io;
    }
   }
    
export default SocketService;