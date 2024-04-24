import { FC, useLayoutEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import Choices from 'choices.js'

const Tags: FC<any> = ({
  defaultValue,
  disabled,
  className,
  placeholder,
  removeItemButton,
  ...props
}) => {
  const tagsInput = useRef<any>(null)

  useLayoutEffect(() => {
    const plainText =
      tagsInput.current.classList.contains('form-control-plaintext') && `choices__inner-plaintext`
    const containerInner = `choices__inner ${plainText && plainText}`

    new Choices(tagsInput.current, {
      silent: true,
      allowHTML: false,
      placeholder: true,
      placeholderValue: placeholder,
      removeItemButton: false || removeItemButton,
      classNames: {
        containerInner: containerInner,
      },
    })
  })

  return (
    <>
      <Form.Control
        className={className}
        ref={tagsInput}
        defaultValue={defaultValue}
        disabled={disabled}
      ></Form.Control>
    </>
  )
}

export default Tags
