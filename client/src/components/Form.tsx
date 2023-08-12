import { useState } from "react"
import { Socket } from "socket.io-client"

export const Form = ({socket}:{socket: Socket}) => {
    const [name, setName] = useState('')
  return (
    <>
        <h3 className="text-xl pb-2 uppercase font-bold text-blue-500 text-center mb-5">Agregar personaje</h3>

        <form onSubmit={e=>e.preventDefault()} >
            <input type="text" className="w-full bg-gray-100 p-1 rounded" placeholder="Nombre" onChange={({target})=>setName(target.value)} />
            <button
                type="button"
                className="w-full mt-2 bg-yellow-400  text-center p-1 text-white uppercase text-sm font-bold rounded"
                disabled={name.length === 0}
            onClick={()=>socket.emit('create',name)}
            >Agregar</button>
        </form>
    </>
  )
}
