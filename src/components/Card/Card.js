import React from 'react'
// import Board from '../Board/Board'
import './Card.css'


  const Card = ({ KeyId,Index,boardid,card,deleteCard,moveForward,moveBackward }) => {

    const { name } = card;

    return (

      <div key={Index} className='card-data'>
        <div>
          <h3>{name}</h3>
          
        </div>
        {
          (KeyId === 1) ?
          <div className='card_button'>
            <button type='button'id="text" onClick ={() => deleteCard(KeyId,Index)}> Del </button> 
            <button type='button' id="text" onClick={()=> moveForward(KeyId,Index)}>▶</button>
            {/* <button type='button'id="text" disabled onClick={()=> moveBackward(KeyId,Index)}>◀</button> */}
          </div> : null
        }
        {
          (KeyId === 2) ?
          <div className='card_button'>
            <button type='button'id="text" onClick ={() => deleteCard(KeyId,Index)}> Del </button> 
            <button type='button' id="text" onClick={()=> moveForward(KeyId,Index)}>▶</button>
            <button type='button'id="text"  onClick={()=> moveBackward(KeyId,Index)}>◀</button>
          </div> : null
        }
        {
          (KeyId === 3) ?
          <div className='card_button'>
            <button type='button'id="text" onClick ={() => deleteCard(KeyId,Index)}> Del </button> 
            <button type='button' id="text" onClick={()=> moveForward(KeyId,Index)}>▶</button>
            <button type='button'id="text" onClick={()=> moveBackward(KeyId,Index)}>◀</button>
          </div> : null
        } 
        {
          (KeyId === 4) ?
          <div className='card_button'>
            <button type='button'id="text" onClick ={() => deleteCard(KeyId,Index)}> Del </button> 
            {/* <button type='button' id="text" disabled onClick={()=> moveForward(KeyId,Index)}>▶</button> */}
            <button type='button'id="text" onClick={()=> moveBackward(KeyId,Index)}>◀</button>
          </div> : null
        }
              
      </div>
    )
  }


export default Card;