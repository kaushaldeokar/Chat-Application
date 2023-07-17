import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chats" element={<ChatPage/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
