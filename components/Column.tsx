import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn;
    todos: [];
    index: number;
} 

function Column ({id, todos, index} : Props) {
  return (
    <div>
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div 
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                ref={provided.innerRef}
                >
                  {
                  <Droppable droppableId={index.toString()} type="card">
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`p-2 rounded-2xl shadow-sm ${
                          snapshot.isDraggingOver  ? 
                          "bg-green-200" : "bg-white/50"
                      
                        }`}
                      >
                        <h2>{id}</h2>

                      </div>
                    )}
                  </Droppable>
                      }
                </div>
            )}
        </Draggable>
       
    </div>
  )
}

export default Column
