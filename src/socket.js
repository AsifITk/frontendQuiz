import { io } from "socket.io-client"
let url = "http://localhost:8000";
const socket = io(url);
export default socket;