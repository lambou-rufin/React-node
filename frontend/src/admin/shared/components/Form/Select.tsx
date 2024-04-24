import { FC, useLayoutEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import Choices from 'choices.js'
import { ErrorMessage } from 'formik'
interface SelectProps {
  required?: boolean
  multiple?: boolean
  disabled?: boolean
  className?: string
  placeholder?: string
  removeItemButton?: boolean
  shouldSort?: boolean
  searchEnabled?: boolean
  searchPlaceholder?: string
  defaultValue?: string | string[]
  valueChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  as?: typeof Form.Select
  name?: string
  id?: string
  children: React.ReactNode
  value?: any
}

const Select: FC<SelectProps> = ({ ...props }) => {
  const {
    required,
    multiple,
    disabled,
    className,
    placeholder,
    removeItemButton,
    shouldSort,
    searchEnabled,
    searchPlaceholder,
    defaultValue,
    valueChange,
    as,
    name,
    id,
    value,
  } = props
  const selectInput = useRef<any>(null)
  useLayoutEffect(() => {
    new Choices(selectInput.current, {
      silent: true,
      allowHTML: false,
      searchEnabled: false || searchEnabled,
      placeholder: true,
      placeholderValue: placeholder,
      searchPlaceholderValue: 'Search' || searchPlaceholder,
      shouldSort: false || shouldSort,
      removeItemButton: false || removeItemButton,
    })
  })

  return (
    <>
      {props.children && (
        <>
          <Form.Select
            id={id}
            as={as}
            name={name}
            required={required}
            defaultValue={defaultValue}
            className={className}
            ref={selectInput}
            multiple={multiple}
            disabled={disabled}
            onChange={valueChange}
            value={value}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {props.children}
          </Form.Select>
        </>
      )}
    </>
  )
}

export default Select
