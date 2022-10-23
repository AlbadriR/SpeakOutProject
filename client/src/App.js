import './App.css';
import io from 'socket.io-client';
import {useState} from 'react';
import Chat from './Chat';
const socket = io.connect("http://localhost:3001");
function App() {

  const [username, setUsername] = useState("");
  const [room,setRoom] = useState("");
  const [showChat,SetShowChat] = useState(false);

  const joinRoom = () => {
    if(username !== "" && room !== ""){
        socket.emit("join_room",room);
        SetShowChat(true);
    }
  }
  // The {!showChat ?} get the bool value and if it's !showChat (true) then we display everythng expect the chat else we display the chat only
  return (
    <div className="App">
      {!showChat ? (
    <div className="joinChatContainer">
    <h3>Join random chat</h3>
    <input 
     type="text"
     placeholder="Your name"
     onChange={(event) => {
      setUsername(event.target.value);
      }}
       />
    <input 
    type="text"
    placeholder="Room ID"
    onChange={(event) => {
      setRoom(event.target.value);
      }}
       />
    <button onClick={joinRoom}>Join a room</button>
    </div>
    ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
export default App;
