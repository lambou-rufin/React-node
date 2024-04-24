import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Personne } from 'admin/utils/interfaces';
import React from 'react';

function SearchSelect({
  options,
  getOptionLabel,
  placeholder,
  onChangeSelection,
  isOptionEqualToValue,
  id,
  value,
  defaultValue,
  className,
  customListComponent,
  useCustomListComponent,
  liStyle,
  style,
  textFieldStyle,
  errorMessage,
  error,
}: {
  options: ReadonlyArray<any>;
  getOptionLabel?: (option: any) => string;
  placeholder: string;
  onChangeSelection: (selected: Personne | null) => void;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  id?: string;
  value?: any;
  defaultValue?: any;
  className?: string;
  customListComponent?: any;
  useCustomListComponent?: boolean;
  liStyle?: any;
  style?: any;
  textFieldStyle?: any;
  errorMessage?: string;
  error?: boolean;
}) {
  const handleSelectionChange = (event: React.ChangeEvent<any>, newValue: Personne | null) => {
    onChangeSelection(newValue);
  };

  return (
    <Autocomplete
      className={className + ' w-100'}
      id={id}
      size="small"
      style={style}
      options={options}
      disablePortal
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      value={value}
      defaultValue={defaultValue}
      onChange={handleSelectionChange}
      renderOption={(props, option, { selected }) => (
        <>
          {useCustomListComponent ? (
            <li {...props} style={liStyle}>
              {customListComponent(option)}
            </li>
          ) : (
            getOptionLabel && (
              <li {...props} style={liStyle}>
                {getOptionLabel(option)}
              </li>
            )
          )}
        </>
      )}
      renderInput={(params) => {
        return (
          <TextField {...params} placeholder={placeholder} className=""
            inputProps={{ ...params.inputProps, style: textFieldStyle }}
            error={error}
            helperText={`${error ? errorMessage ? errorMessage : 'Le champ est obligatoire' : ''}`}
          />
        )
      }}
    />
  );
}

export default SearchSelect;
