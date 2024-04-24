import { FC } from 'react'
import { Form } from 'react-bootstrap'
import Flatpickr from 'react-flatpickr'
// import 'flatpickr/dist/themes/light.css'
// import 'flatpickr/dist/l10n/fr'
const FlatDatePicker: FC<any> = ({ className, defaultValue, id, onchange }) => {
  return (
    <Flatpickr
      className={className}
      id={id}
      options={{ locale: 'fr', defaultDate: defaultValue, dateFormat: 'd/m/Y' }}
      onChange={onchange}
      render={({ defaultValue, value, ...props }: any, ref: any) => {
        return <Form.Control defaultValue={defaultValue} ref={ref} />
      }}
    />
  )
}

export default FlatDatePicker
