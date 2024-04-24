import { FC, useLayoutEffect, useRef } from 'react'
import { DateRangePicker } from 'vanillajs-datepicker'
import { Form, InputGroup } from 'react-bootstrap'

const DatePicker: FC<any> = ({ className, ...props }) => {
  const { autoHide, clearBtn, format, maxView, pickLevel, startView, title, todayBtn, weekStart } =
    props
  const dateInput = useRef(null)

  useLayoutEffect(() => {
    const opt = {
      title: title || '',
      buttonClass: 'btn btn-md',
      autohide: autoHide || true,
      clearBtn: clearBtn || false,
      todayBtn: todayBtn || false,
      format: format || 'yyyy-mm-dd',
      maxView: maxView || 3,
      pickLevel: pickLevel || 0,
      startView: startView || 0,
      weekStart: weekStart || 0,
    }

    new DateRangePicker(dateInput.current, opt)
  })

  return (
    <InputGroup className={className} ref={dateInput}>
      <Form.Control placeholder="yyyy-mm-dd" type="text" autoComplete="off" name="start" />
      <InputGroup.Text>to</InputGroup.Text>
      <Form.Control placeholder="yyyy-mm-dd" type="text" autoComplete="off" name="end" />
    </InputGroup>
  )
}

export default DatePicker
