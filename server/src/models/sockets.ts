import { Server, Socket } from 'socket.io';
import { CharacterList } from './characterList';

export class Sockets {
  private io: Server;
  private characterList: CharacterList;

  constructor(io: Server) {
    this.io = io;
    this.characterList = new CharacterList();
    this.events();
  }

  private events() { 
    this.io.on('connection', (socket: Socket) => {
      
      socket.emit('characters',this.characterList.get());

      socket.on('create',(name:string)=>{
        this.characterList.create(name);
        this.io.emit('characters',this.characterList.get());
      })

      socket.on('vote',(id:string)=>{
        this.characterList.vote(id);
        this.io.emit('characters',this.characterList.get());
      })

      socket.on('delete',(id:string)=>{
        this.characterList.delete(id);
        this.io.emit('characters',this.characterList.get());
      })
    });
  }
}
