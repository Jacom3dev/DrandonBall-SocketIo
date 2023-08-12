import { useEffect, useState} from "react";
import { io } from "socket.io-client";

import { Characters } from "./components/Characters"
import { Form } from "./components/Form";
import { ICharacter } from "./interfaces/character.interface";
import { Chart } from "./components/Chart";


const connectServer = ()=> {
  const socket = io('http://localhost:8080',{transports:['websocket']});  
  return socket;
}

const App = () => {
  const [socket] = useState(connectServer());
  const [online, setOnline] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);


  useEffect(()=>{
    socket.on('connect',()=>setOnline(true));
    socket.on('disconnect',()=>setOnline(false));
  },[socket])


  useEffect(() => {
    socket.on('characters',(data)=>setCharacters(data))
  }, [socket])

  
  return (
    <div className="container mx-auto">
      <p className="text-2xl">
        Servidor: {' '}

        {online?
          <span className="text-green-600 text-sm font-bold">Online</span>
          :<span className="text-red-600 text-sm font-bold">Offline</span>
        }
        
      </p>

      <h1 className="mt-3 text-5xl uppercase font-bold mb-5 text-yellow-400 border-b">Dragon Ball</h1>

        <Chart characters={characters}/>

      <div className="flex flex-row justify-between mt-5">
        <div className="w-8/12 p-2">
          <Characters characters={characters} socket={socket} />
        </div>
        <div className="w-4/12 p-2">
          <Form socket={socket}/>
        </div>
      </div>
    </div>
  )
}

export default App;