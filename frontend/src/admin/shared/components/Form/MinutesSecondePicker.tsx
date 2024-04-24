import { Dropdown } from 'bootstrap'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const MinutesSecondePicker: FC<any> = ({
  text,
  className,
  placeholder,
  value,
  onSelect,
  timeSlots,
  ...props
}) => {
  const [pickerTime, setPickerTime] = useState<string>(value)
  const dropdown = useRef<Dropdown | null>(null)
  const timeInput = useRef<any>(null)

  const timePickHandler = (e: any) => {
    e.preventDefault()
    const target = e.target
    const timeValue = target.dataset.pickerTime
    const allItems = timeInput.current.nextElementSibling.querySelectorAll('.nk-timepicker-time')
    setPickerTime(timeValue)
    allItems.forEach((item: any) => {
      item.classList.remove('active')
    })
    target.classList.add('active')
  }

  useEffect(() => {
    const thisElm = timeInput.current
    thisElm.value = pickerTime
    dropdown.current = new Dropdown(thisElm, {
      offset: [0, 5],
    })
  })

  useEffect(() => {
    if (onSelect) {
      onSelect(pickerTime)
      dropdown.current?.hide()
    }
  }, [pickerTime])

  useEffect(() => {
    if (value) {
      setPickerTime(value)
    }
  }, [value])

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setPickerTime(e.target.value);
    } else {
      setPickerTime("");
    }
  }

  return (
    <div className="dropdown">
      <InputGroup className="mb-3">
        <Form.Control
          className={className}
          defaultValue={value}
          ref={timeInput}
          placeholder={placeholder}
          data-bs-toggle="dropdown"
          {...props}
          autoComplete="off"
          onChange={onChangeValue}
          type="number"
          min={0}
          step={1}
        />
        <ul
          className="dropdown-menu nk-timepicker-dropdown"
          style={{ maxHeight: '400px', overflow: 'auto' }}
        >
          {timeSlots.map((item: number, index: number) => {
            return (
              <li key={index}>
                <button
                  className="dropdown-item nk-timepicker-time"
                  onClick={timePickHandler}
                  data-picker-time={item < 10 ? `0${item}` : item}
                  type="button"
                >
                  {item < 10 ? `0${item}` : item}
                </button>
              </li>
            )
          })}
        </ul>
        <InputGroup.Text>{text ? text : 'Min'}</InputGroup.Text>
      </InputGroup>


    </div>
  )
}

export default MinutesSecondePicker
