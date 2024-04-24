import exportFromJSON from 'export-from-json';
import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import { StyleSheetManager } from 'styled-components';
import { Icon } from '..';
import DataTablePagination from '../Pagination/DataTablePagination';
import './DataTable.scss';

const Action: React.FC<any> = () => {
  return (
    <div className=" d-flex align-items-center me-2 ms-2">
      <div className="btn-group d-none d-md-inline-flex">
        <Button variant="outline-light">
          <Icon name="filter"></Icon>
        </Button>
        <Button variant="outline-light">Modifier</Button>
        <Button variant="outline-light">Sauvegarder</Button>
        <Button variant="outline-light">Supprimer</Button>
      </div>
      <div className="btn-group d-md-none">
        <Button variant="outline-light">
          <Icon name="filter"></Icon>
        </Button>
        <Button variant="outline-light">
          {' '}
          <Icon name="edit"></Icon>
        </Button>
        <Button variant="outline-light">
          {' '}
          <Icon name="save"></Icon>
        </Button>
        <Button variant="outline-light">
          {' '}
          <Icon name="trash-fill"></Icon>
        </Button>
      </div>
    </div>
  );
};

// export file component
const Export: FC<any> = ({ data }) => {
  const fileName = 'user-data';

  const exportCSV = () => {
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const exportExcel = () => {
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div className="export-options d-flex align-items-center me-2">
      <div className="export-title small me-2">Export</div>
      <div className="btn-group">
        <Button variant="outline-light" onClick={() => exportCSV()}>
          CSV
        </Button>
        <Button variant="outline-light" onClick={() => exportExcel()}>
          Excel
        </Button>
      </div>
    </div>
  );
};

// expanded component in mobile view
const expandedComponent: FC<any> = ({ data, dataToExpand }) => {
  return (
    <ul className="data-details p-3 gap gy-1 border-bottom small">
      {dataToExpand.map((item: any, index: number) => (
        <li key={index}>
          <span className="data-title text-base fw-medium me-2">{`${item.key}:`}</span>
          <span className="data-text text-light">{item.value(data)}</span>
        </li>
      ))}
    </ul>
  );
};

const expandedComponentPerson: FC<any> = ({ data }) => {
  return (
    <ul className="data-details p-3 gap gy-1 border-bottom small">
      <li>
        <span className="data-title text-base fw-medium me-2">Prénom:</span>
        <span className="data-text text-light">{data.prenom}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Nom</span>
        <span className="data-text text-light">{data.nom}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Sexe</span>
        <span className="data-text text-light">{data.sexe}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Mail</span>
        <span className="data-text text-light">{data.email}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Téléphone</span>
        <span className="data-text text-light">{data.telephone}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Adresse</span>
        <span className="data-text text-light">{data.adresse}</span>
      </li>
      <li>
        <span className="data-title text-base fw-medium me-2">Pays</span>
        <span className="data-text text-light">{data.pays}</span>
      </li>
    </ul>
  );
};

// custom checkbox
// interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   onClick?: React.MouseEventHandler<HTMLInputElement>;
// }
const customCheckbox: any = React.forwardRef<any, any>(({ onClick, ...rest }, ref) => (
  <div className="form-check" id={rest.name}>
    <input type="checkbox" className="form-check-input" ref={ref} onClick={onClick} {...rest} />
  </div>
));

const DataTableComponent: FC<any> = ({
  data,
  columns,
  className,
  expandableRows,
  actions,
  actionCrud,
  tableClassName,
  selectableRows,
  paginate = false,
  handleRowClick = () => {},
  buttonAction = null,
  dataToExpand = null,
  noHeader = false,
  customStyles = '',
  ...props
}) => {
  const [tableData, setTableData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [showItemPerPage, setShowItemPerPage] = useState(10);
  const [mobileView, setMobileView] = useState(false);

  // filter items by name
  useEffect(() => {
    setTableData(data);
  }, [searchText, data]);

  // function to change the table design view to expanable under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 960 && expandableRows) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('load', viewChange);
    window.addEventListener('resize', viewChange);
    return () => {
      window.removeEventListener('resize', viewChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          'sortActive',
          'responsive',
          'headCell',
          'isDragging',
          'fixedHeader',
          'renderAsCell',
          'highlightOnHover',
          'pointerOnHover',
          'fixedHeaderScrollHeight',
          'noPadding',
          'dense',
          'striped'
        ].includes(prop)
      }
    >
      <div className="data-table-wrapper">
        {paginate && (
          <div className="data-table-top pt-0 pt-sm-4">
            <div className="data-table-search d-flex ">
              {/* <input
                className="form-control"
                placeholder="Rechercher"
                type="text"
                onChange={(e: any) => setSearchText(e.target.value)}
              /> */}
              {actionCrud && <Action />}
            </div>

            <div className="data-table-action-wrap">
              {actions && <Export data={data} />}
              <div className="data-table-select">
                <select
                  className="form-select"
                  onChange={(e: any) => setShowItemPerPage(e.target.value)}
                  value={showItemPerPage}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>
                <span className="text">Par page</span>
              </div>{' '}
            </div>
          </div>
        )}

        {buttonAction && buttonAction}

        <DataTable
          columns={columns}
          data={tableData}
          className={tableClassName}
          noDataComponent={<div className="p-2">There are no records found.</div>}
          sortIcon={<div className="data-table-sorter"></div>}
          pagination={paginate}
          expandableRowsComponent={
            dataToExpand ? ({ data }) => expandedComponent({ data, dataToExpand }) : expandedComponentPerson
          }
          expandableRows={mobileView}
          selectableRows={selectableRows}
          selectableRowsComponent={customCheckbox}
          pointerOnHover={true}
          paginationComponent={({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
            <div className="data-table-bottom">
              <DataTablePagination
                showItemPerPage={showItemPerPage}
                itemPerPage={rowsPerPage}
                totalItems={rowCount}
                paginate={onChangePage}
                currentPage={currentPage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                setShowItemPerPage={setShowItemPerPage}
              />
            </div>
          )}
          responsive={true}
          onRowClicked={handleRowClick}
          noTableHead={noHeader}
        />
      </div>
    </StyleSheetManager>
  );
};

export default DataTableComponent;
