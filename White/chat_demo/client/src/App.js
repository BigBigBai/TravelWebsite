import './App.css';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder="White..." />
      <input type="text" placeholder="Room ID..." />
      <button>Join A Room</button> 
    </div>
  );
}

export default App;
