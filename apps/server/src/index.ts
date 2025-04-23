import * as http from "http";
import SocketService from "./services/socket "; 



async function init(){
    const socketService=new SocketService();     //socket io server initialize

    const httpServer=http.createServer();
    const port=process.env.PORT ? process.env.PORT:8000;

    socketService.io.attach(httpServer); // attach socket io server to http server
    httpServer.listen(port,()=>{
        console.log(`Server is running on port ${port}`);});
    socketService.initListeners(); // initialize socket io listeners
    }
    init();