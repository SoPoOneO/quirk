
import Game from './features/Game/Game'
import Board from './features/Board/Board'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function App(){

  return (
    <DndProvider backend={HTML5Backend}>
      
      <div>
        <div style={{display: "inline-block", width: "50%", verticalAlign: "top", padding: "20px", boxSizing: "border-box"}}>
          <Game />
        </div>
        <div style={{display: "inline-block", width: "50%", verticalAlign: "top", padding: "20px", boxSizing: "border-box"}}>
          <Board />
        </div>
      </div>
    </DndProvider>
  );
}

