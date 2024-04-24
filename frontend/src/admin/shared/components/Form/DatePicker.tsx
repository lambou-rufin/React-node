import { FC, useLayoutEffect, useRef, useEffect } from 'react'
import { Datepicker } from 'vanillajs-datepicker'
import { Form } from 'react-bootstrap'
;(Datepicker.locales as any).fr = {
  days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  daysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  daysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthsShort: [
    'Jan',
    'Fév',
    'Mar',
    'Avr',
    'Mai',
    'Juin',
    'Juil',
    'Août',
    'Sep',
    'Oct',
    'Nov',
    'Déc',
  ],
  today: "Aujourd'hui",
  clear: 'Effacer',
  titleFormat: 'MM y',
}

const DatePicker: FC<any> = ({
  className,
  defaultValue,
  id,
  onSelect,
  onBlurHandle,
  minDate,
  maxDate,
  ...props
}) => {
  const { autoHide, clearBtn, format, maxView, pickLevel, startView, title, todayBtn, weekStart } =
    props
  const dateInput = useRef(null)

  useEffect(() => {
    const opt = {
      title: title || '',
      language: 'fr',
      buttonClass: 'btn btn-md',
      autohide: autoHide || true,
      clearBtn: clearBtn || false,
      todayBtn: todayBtn || false,
      format: format || 'dd MM yyyy',
      maxView: maxView || 3,
      pickLevel: pickLevel || 0,
      startView: startView || 0,
      weekStart: weekStart || 1,
      maxDate: maxDate ? new Date(maxDate) : '',
      minDate: minDate ? new Date(minDate) : '',
    }
    const inputElement = dateInput.current
    if (inputElement) {
      const datepickerInstance = new Datepicker(inputElement, opt)
      return () => {
        datepickerInstance.destroy()
      }
    }
    return () => {}
  }, [minDate, maxDate, defaultValue])

  useEffect(() => {
    const inputElement = dateInput.current
    ;(inputElement as any).addEventListener('changeDate', (e: any) => {
      const selectedDate = e.detail.date
      if (onSelect) {
        onSelect(selectedDate)
      }
    })
  }, [])

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlurHandle && onBlurHandle(e.target.value)
  }

  const formatteddefaultValue = defaultValue
    ? `${String(defaultValue.getDate()).padStart(2, '0')} ${defaultValue.toLocaleString('default', {
        month: 'long',
      })} ${defaultValue.getFullYear()}`
    : ''

  return (
    <>
      <Form.Control
        className={className}
        ref={dateInput}
        defaultValue={formatteddefaultValue}
        id={id}
        placeholder="JJ MM AAAA"
        autoComplete="off"
        onBlur={onBlur}
      />
    </>
  )
}

export default DatePicker
