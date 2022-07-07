import React from 'react'
import './Board.css'
import Card from '../Card/Card'



const Board = ({keyId, Board,deleteCard,moveForward,moveBackward }) => {
    return (
     <div id='boardstyle'>
      <div className='board'>
        <div className='board-top'>
            <div className='nav'>{Board.title}</div>
             { Board.cards.length}
             { Board.cards.map((ele,index) => {
                return (
                  <div key={index}>
                    <Card id="card" KeyId={keyId} Index={index} card={ele} boardid={Board.id} deleteCard={deleteCard} moveForward={moveForward} moveBackward={moveBackward}/>
                    {/* {keyId} */}
                  </div>
                );
              })
            }
        </div>
     </div>
     </div>
    )
}

export default Board;