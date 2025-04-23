import { Server } from "socket.io";

class SocketService {
    private _io:Server;
    constructor() {
        console.log("Init socket services...");
        this._io = new Server({
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
                allowedHeaders: ["my-custom-header"],
                credentials: true,
            },
        });     //socket io server initialize 
    }

    public initListeners() {
        const io=this.io;
        console.log("Init socket listeners...");

        io.on("connection", (socket) => {
            console.log(`New client connected: ${socket.id}`);

            socket.on(`event:messege`,async({messege}:{messege:string})=>{ 
                console.log(`New message recived: ${messege}`);   
            })
        });

    }
   get io(){
        return this._io;
    }
   }
    
export default SocketService;