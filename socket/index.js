import { Server } from "socket.io";

const io = new Server(9000, { // first is port, second is an object
    cors: {
        origin: 'http://localhost:3000'
    }
});

let users = [];

const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

io.on('connection', (socket) => {
    console.log('socket user connected');

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    socket.on("sendMessage", (data) => {
        const user = getUser(data.receieverId);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            console.log(`User not found for receiverId: ${data.receieverId}`);
        }
    });

    socket.on("sendCommunityMessage", (data) => {
        io.emit('getCommunityMessage', data);
    });

    socket.on('disconnect', () => {
        users = users.filter(user => user.socketId !== socket.id);
        io.emit("getUsers", users);
        console.log(`User disconnected: ${socket.id}`);
    });
});

console.log("Server is running on port 9000");