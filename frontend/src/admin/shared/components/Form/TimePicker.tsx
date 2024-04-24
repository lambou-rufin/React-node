import { FC, useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

import { Dropdown } from 'bootstrap'

import toMin from '../../utilities/toMin'
import toTime from '../../utilities/toTime'
import toTwelve from '../../utilities/toTwelve.ts'

const TimePicker: FC<any> = ({ className, placeholder, value, onSelect, ...props }) => {
  const [pickerTime, setPickerTime] = useState<string>(value)
  const { start = '00:00', end = '23:59', interval = 30, format = 24 } = props
  const dropdown = useRef<Dropdown | null>(null)

  const total = toMin(end) - toMin(start)
  const slot = Math.floor(total / interval)
  const timeSlots: string[] = []
  let startTime = toMin(start)

  for (let i = 0; i < slot + 1; i++) {
    const currentTime = startTime
    if (format === 12) {
      timeSlots.push(toTwelve(toTime(currentTime)))
    } else {
      timeSlots.push(toTime(currentTime))
    }
    startTime = currentTime + interval
  }
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

  return (
    <div className="dropdown">
      <Form.Control
        className={className}
        defaultValue={value}
        ref={timeInput}
        placeholder={placeholder}
        data-bs-toggle="dropdown"
        {...props}
        autoComplete="off"
      />
      <ul
        className="dropdown-menu nk-timepicker-dropdown"
        style={{ maxHeight: '400px', overflow: 'auto' }}
      >
        {timeSlots.map((item: string, index: number) => {
          return (
            <li key={index}>
              <button
                className="dropdown-item nk-timepicker-time"
                onClick={timePickHandler}
                data-picker-time={item}
                type="button"
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TimePicker
