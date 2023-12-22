import './App.css';
import Modal from "./components/modal/Modal";
import React, {useState} from "react";
import List from "./components/list/List";
import Input from "./components/input/Input";

function App() {
  const [show,setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [addTask, setAddTask] = useState('');
    const handleOpen = () => {
      setShow(!show)
    }

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleAddInputChange = (event) => {
        setAddTask(event.target.value);
    }

    const tasks = [
        {
          id:1 ,
          task: 'coding'
        },
        {
          id:2,
          task: 'eat'
        },
        {
          id:3,
          task: 'sleep'
        }
      ]

  return (
    <div className="App">
      <button onClick={handleOpen}>open</button>

        {show &&
            <Modal handleOpen={handleOpen}>

                <Input
                    placeholder="Search..."
                    onChange={handleSearchInputChange}
                />

                <Input
                    placeholder="Add task..."
                    onChange={handleAddInputChange}
                />

            </Modal>
        }
        <List tasks={tasks} />

    </div>
  );
}

export default App;
