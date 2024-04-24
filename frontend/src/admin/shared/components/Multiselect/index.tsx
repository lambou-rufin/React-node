import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import "./multiselect.css";

function Multiselect({
  options,
  getOptionLabel,
  stringToShow,
  placeholder,
  onChangeSelection,
  isOptionEqualToValue,
  id,
  value,
  error,
  defaultValue,
  customListComponent,
  useCustomListComponent,
  liStyle,
  errorMessage,
  className,
  style,
}: {
  options: ReadonlyArray<any>;
  getOptionLabel?: (option: any) => string;
  stringToShow: string;
  placeholder: string;
  onChangeSelection: (selected: any[]) => void;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  id?: string;
  value?: any[];
  error?: boolean;
  defaultValue?: any;
  customListComponent?: any;
  useCustomListComponent?: boolean;
  liStyle?: any;
  errorMessage?: string
  className?: string
  style?: any,
}) {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleSelectionChange = (event: React.ChangeEvent<any>, value: any[]) => {
    setSelectedOptions(value);
    onChangeSelection(value);
  };

  return (
    <Autocomplete
      classes={{
        input: 'font-size-input',
        option: 'font-size-input liste-option'
      }}
      style={style}
      className={`w-100 ${className}`}
      multiple
      id={id}
      size="small"
      options={options}
      disableCloseOnSelect
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      value={value}
      onChange={handleSelectionChange}
      defaultValue={defaultValue}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={liStyle}>
          <Checkbox
            style={{
              marginRight: 8
            }}
            checked={selected}
            size="small"
          />
          {useCustomListComponent ? customListComponent(option) : option[stringToShow]}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          error={error}
          helperText={`${error ? errorMessage ? errorMessage : 'Le champ est obligatoire' : ''}`}
          {...params}
          placeholder={placeholder}
          style={{ fontWeight: 'bold' }}
        />
      )}
    />
  );
}

export default Multiselect;
