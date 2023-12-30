import './App.css';
import React from "react";
import {useEffect, useState, useRef} from "react";

import {createConnection} from "./components/Chat";

// function ChatRoom({roomId}) {
//     const [serverUrl, setServerUrl] = useState('https://localhost:12345')
//
//
//
//     return (
//         <>
//             <label>
//                 Server URl;{''}
//                 <input value={serverUrl} onChange={e => setServerUrl (e.target.value)}/>
//             </label>
//             <h1>Welcome to my {roomId} room</h1>
//         </>
//     )
// }
//
//
// export default function App() {
//     const [roomId, setRoomId] = useState('general')
//     const [show, setShow] = useState(false)
//
//     return (
//         <>
//             <label>
//                 Choose the chat room: {''}
//                 <select value={roomId} onChange={e => setRoomId(e.target.value)}>
//                     <option value="general">general</option>
//                     <option value="React">React</option>
//                     <option value="Redux">Redux</option>
//                     </select>
//             </label>
//             <button onClick={() => setShow(!show)}>
//                 {show ? 'Close chat' : 'Open chat'}
//             </button>
//             {show && <hr />}
//             {show && <ChatRoom roomId={roomId} />}
//         </>
//     )
// }


export default function Counter() {
    let ref = useRef(0)

    function handleClick() {
        ref.current = ref.current + 1;
        console.log  ('You clicked ' + ref.current + ' items')
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    )
}


