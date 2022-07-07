// import uuidv4 from 'uuid';
import { useState } from 'react';
import { v4 } from 'uuid';


import './App.css';
import Board from './components/Board/Board';
const intialTask = [
  {
    id: 1,
    title: 'Backlog',
    cards: [
      { name: 'Tasks 1' , stage: 1, cid:v4()},
      { name: 'Tasks 2', stage: 1,  cid:v4()},
     
    ],
  },
  {
    id: 2,
    title: 'Todo',
    cards: [
      { name: 'Tasks 3' , stage: 2, cid:v4()},
      { name: 'Tasks 4', stage: 2,  cid:v4()},
    ],
  },
  {
    id: 3,
    title: 'InProgress',
    cards: [
      { name: 'Tasks 5' , stage: 3, cid:v4()},
      { name: 'Tasks 6', stage: 3,  cid:v4()},
    ],
  },
  {
    id: 4,
    title: 'Done',
    cards: [
      { name: 'Tasks 7' , stage: 4, cid:v4()},
      { name: 'Tasks 8', stage: 4,  cid:v4()},
    ],
  }
]


function App() {
  const [task, setTask] = useState("")
  const [newTask, setNewTask] = useState(intialTask);

  const changeHandler = (event) =>{
    setTask(event.target.value);
  }
  
  const addCard=()=>{
    const tempBoards = [...newTask];
  
    tempBoards[0].cards.push({
      cid: v4(),
      name: task,
      stage: 0
    })
  
    // setBoards(tempBoards);
    setNewTask(tempBoards);
    setTask("");
  }

  const deleteCard = (KeyId,Index) =>{

      let tempBoards=[...newTask];
      tempBoards.filter((ele)=>{
        return (
          ele.id === KeyId ? 
            ele.cards.splice(Index,1) 
          : null
          )
          // : alert("error in deleting task..")
      });
      setNewTask(tempBoards);
  };

// const [tempdata,setTempdata] = useState([]);
  
const moveForward = (KeyId,Index) => {
    let tempBoards = [...newTask];
    let tempdata = [];
    let newKey = KeyId + 1;
    tempBoards.filter((ele) => {
        return(
          ele.id === KeyId ? 
            tempdata = ele.cards[Index]
          : null
        )
    });

    tempBoards.filter((ele) => {
      return(
        ele.id === newKey ? 
            ele.cards.push(tempdata)
        : null
      )
    });
    deleteCard(KeyId,Index);
 }

 const moveBackward = (KeyId,Index) => {
  let tempBoards = [...newTask];
  let tempdata = [];
  let newKey = KeyId - 1;
  tempBoards.filter((ele) => {
      return(
        ele.id === KeyId ? 
          tempdata = ele.cards[Index]
        : null
      )
  });

  tempBoards.filter((ele) => {
    return(
      ele.id === newKey ? 
          ele.cards.push(tempdata)
      : null
    )
  });

  deleteCard(KeyId,Index);
 }


  return (
    <div className='App'>

      <div className='kanban-board'>
        <h1 id="header">Kanban Board</h1>
      </div>
      <div className='box1'>
        <input type="text" name="" id="text1" placeholder='Please Name Backlog...' onChange={changeHandler} value={task} />
        <sub><button type='submit' id="button" onClick={addCard}>Add Backlog</button></sub>
        </div>

        <div>
          {
            newTask.map((ele,index) => {
              return (
                <Board keyId={ele.id} Board={ele} deleteCard={deleteCard} moveForward={moveForward} moveBackward={moveBackward}/>
              );
            }
          
            )

          }
        </div>
      </div>
  );
}

export default App;
