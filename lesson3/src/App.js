import './App.css';
import Modal from "./components/modal/Modal";
import {useState} from "react";
import List from "./components/list/List";

function App() {
  let isShow = false
  const [show,setShow] = useState(false)
    const handleOpen = () => {
      setShow(!show)
    }
    const tasks = [
      {
        id: 1,
        title: 'HTML',
        completed: false
      },
      {
        id: 2,
        title: 'REACT',
        completed: false
      },
      {
        id: 3,
        title: 'JS',
        completed: false
      },
      {
        id: 4,
        title: 'CSS',
        completed: false
      }
    ]

  return (
    <div className="App">
      <button onClick={handleOpen}>open</button>
        {show &&
            <Modal handleOpen={handleOpen}/>
        }
        <List tasks={tasks}/>
    </div>
  );
}

export default App;
