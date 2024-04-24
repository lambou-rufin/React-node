// https://www.ag-grid.com/react-data-grid/getting-started/
import { RowGroupOpenedEvent } from "ag-grid-community"
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import { ColDef, GridApi, GridOptions } from 'ag-grid-enterprise'
import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useMemo, useState } from 'react'
import { Dropdown, Form, ListGroup } from 'react-bootstrap'

export const DataTableAGGrid: React.FC<any> = ({
  columnDefs,
  setColumnDefs,
  rowData,
  handleRowClick,
  setRowSelected,
}) => {
  const containerStyle = useMemo(
    () => ({
      width: '100%',
    }),
    [],
  )
  const gridStyle = useMemo(() => ({ width: '100%' }), [])
  const [gridApi, setGridApi] = useState<GridApi | null>(null)
  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    }
  }, [])

  const gridOptions: GridOptions = {
    rowSelection: 'multiple',
    rowStyle: { cursor: 'pointer' },
    onGridReady: (params: { api: GridApi }) => {
      setGridApi(params.api)
    },
    suppressRowClickSelection: true,
    alwaysShowVerticalScroll: true,
    alwaysShowHorizontalScroll: true,
    autoSizeStrategy: {
      type: 'fitGridWidth',
    },
    domLayout: 'autoHeight',
  }

  /**
   * LIFECYCLE
   */
  useEffect(() => {
    if (gridApi) {
      gridApi.addEventListener('columnMoved', handleColumnMoved)
    }
    return () => {
      if (gridApi) {
        gridApi.removeEventListener('columnMoved', handleColumnMoved)
      }
    }
  }, [gridApi, columnDefs])

  /**
   * FUNCTION
   */
  const toggleCheckbox = (colonneField: string, isChecked: boolean) => {
    const nouvellesColonnes = columnDefs.map((colonne: any) => {
      if (colonne.field === colonneField) {
        return { ...colonne, hide: !isChecked }
      }
      return colonne
    })

    setColumnDefs(nouvellesColonnes)
  }

  const handleColumnMoved = () => {
    if (gridApi) {
      const orderedColumnIds = gridApi.getColumnState().map((colState) => colState.colId)
      const nouvellesColonnes = orderedColumnIds
        .map((colId) => columnDefs.find((colonne: any) => colonne.field === colId))
        .filter((colonne) => colonne !== undefined) as ColDef<any, any>[]
      setColumnDefs(nouvellesColonnes)
    }
  }

  const selectedRows = () => {
    if (setRowSelected) {
      const selectedNodes = gridApi?.getSelectedNodes()
      const selectedIds =
        selectedNodes?.map((data: any) => {
          return data.data.id
        }) || []
      setRowSelected(selectedIds)
    }
  }

  return (
    <>
      <div className="data-table-top">
        <div></div>
        <div>
          <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside" variant="secondary" size="sm">
              Gérer colonnes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ListGroup>
                {columnDefs?.map((colonne: any) => (
                  <ListGroup.Item
                    style={{
                      height: '32px',
                      padding: '5px 17px',
                    }}
                    key={colonne.field}
                  >
                    <Form.Check
                      style={{ cursor: 'pointer' }}
                      className="form-check-sm"
                      type="switch"
                      id="flexSwitchDefault"
                      label={colonne.headerName}
                      checked={!colonne.hide}
                      onChange={(e) => toggleCheckbox(colonne.field, e.target.checked)}
                    />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={gridStyle} className={'grid-wrapper  ag-theme-material'}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowDragManaged={true}
            suppressMoveWhenRowDragging={true}
            defaultColDef={defaultColDef}
            onRowClicked={handleRowClick}
            gridOptions={gridOptions}
            onSelectionChanged={selectedRows}
          />
        </div>
      </div>
    </>
  )
}
