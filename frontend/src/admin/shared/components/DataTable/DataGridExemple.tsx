import React, { FC } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import DataTable from 'react-data-table-component'

const DraggableDataTable: FC<{
  columns: any
  data: any
}> = ({ columns, data }) => {
  const onDragEnd = (result: any) => {
    console.log(result)

    // Votre logique pour mettre à jour l'ordre des lignes après le glisser-déposer
    // result contient les informations sur le début et la fin du glisser-déposer
    if (!result.destination) {
      return // Le glisser-déposer n'a pas été effectué dans une zone de destination valide
    }

    // Mettez à jour l'ordre des lignes dans votre état ou source de données
    // result contient des informations sur le début et la fin du glisser-déposer

    // Exemple de mise à jour d'un tableau d'objets
    const newData = Array.from(data)
    const [removed] = newData.splice(result.source.index, 1)
    newData.splice(result.destination.index, 0, removed)

    // Mettez à jour l'état ou la source de données avec le nouvel ordre
    // setYourData(newData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              noTableHead
              customStyles={{
                rows: {
                  style: {
                    marginBottom: '8px',
                  },
                },
              }}
              pagination={false} // Désactivez la pagination pour le glisser-déposer
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableDataTable
