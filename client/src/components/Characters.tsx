import { Socket } from "socket.io-client"
import { ICharacter } from "../interfaces/character.interface"

export const Characters = ({characters,socket}:{characters:ICharacter[],socket:Socket}) => {
    return (
        <>
            <h3 className="text-xl pb-2 uppercase font-bold text-blue-500 mb-5">Personajes</h3>
            <table className="w-full ">
                <thead>
                    <tr>
                        <th></th>
                        <th className="uppercase text-sm">Nombre</th>
                        <th className="uppercase text-sm">Votos</th>
                        <th className="uppercase text-sm">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {characters?.map((character:ICharacter)=>(
                        <tr className="text-center">
                        <td><button className="bg-blue-500 rounded py-1 px-3 text-white font-bold" onClick={()=>socket.emit('vote',character.id)}>+1</button></td>
                        <td>
                            {character.name}
                        </td>
                        <td>{character.votes}</td>
                        <td><button className="bg-red-500 hover:bg-red-600 rounded py-1 px-2 text-white font-bold text-sm" onClick={()=>socket.emit('delete',character.id)}>Borrar</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}