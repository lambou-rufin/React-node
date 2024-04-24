/**
 *  Microtaskers
 *  Nom: ANDRIARILALAO Johny Lino
 *  Email: johny.andriarilalao@gmail.com
 */

import React, { useState, useRef, useEffect, FC } from 'react'
import { Dropdown, Form, FormControl, FormLabel } from 'react-bootstrap'
import './ToogleHeure.css'
import { useMask } from '@react-input/mask'

const TimePickerB: FC<{
  handleChangeValue: any
  label: string
  id: string
  defaultValue?: string
}> = ({ label, handleChangeValue, id, defaultValue = null }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [hour, setHour] = useState<string>('00')
  const [minute, setMinute] = useState<string>('00')
  const dropdownRef = useRef<any>(null)

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<any>(null)

  const handleInputChange = (event: any) => {
    const { value } = event.target
    setInputValue(formatTime(value))
    handleChangeValue(formatTime(value))
    ;(inputRef?.current as HTMLInputElement).value = formatTime(value)
  }

  const formatTime = (input: string) => {
    const value = input.replace(/\D/g, '') // Supprime tous les caractères non numériques
    const formattedValue = formatValue(value)

    return formattedValue
  }

  const formatValue = (value: string) => {
    if (value.length === 0) {
      return '00:00'
    } else if (value.length === 1) {
      return '0' + value[0] + ':00'
    } else if (value.length === 2) {
      return value + ':00'
    } else {
      return value.slice(0, 2) + ':' + value.slice(2)
    }
  }

  const handleInputFocus = () => {
    setIsFocused(true)
    setShowDropdown(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setTimeout(() => setShowDropdown(false), 200)
  }

  const handleChangeHour = (value: string) => {
    setHour(value)
    handleChangeValue(`${value}:${minute}`)
    ;(inputRef?.current as HTMLInputElement).value = `${value}:${minute}`
  }

  const handleChangeMinute = (value: string) => {
    setMinute(value)
    handleChangeValue(`${hour}:${value}`)
    ;(inputRef?.current as HTMLInputElement).value = `${hour}:${value}`
  }

  useEffect(() => {
    if (dropdownRef.current) {
      if (isFocused) {
        setShowDropdown(true)
      } else {
        setShowDropdown(false)
      }
    }
  }, [isFocused])

  useEffect(() => {
    if (defaultValue) {
      setHour(defaultValue.split(':')[0])
      setMinute(defaultValue.split(':')[1])
      ;(inputRef?.current as HTMLInputElement).value = `${defaultValue.split(':')[0]}:${
        defaultValue.split(':')[1]
      }`
    }
  }, [defaultValue])

  const handleDocumentClick = (event: any) => {
    // Ferme le dropdown si le clic n'est ni sur l'input ni sur le dropdown
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== id
    ) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    // Écoute les clics sur l'ensemble du document
    document.addEventListener('click', handleDocumentClick)

    return () => {
      // Nettoie l'écouteur d'événements lors du démontage du composant
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <Dropdown show={showDropdown} ref={dropdownRef}>
      <Form>
        <FormLabel>{label}</FormLabel>
        <FormControl
          type="time"
          placeholder="Select time..."
          onFocus={handleInputFocus}
          id={id}
          ref={inputRef}
          onChange={handleInputChange}
        />
      </Form>

      <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
        {/* Conteneur scrollable pour les heures et les minutes */}
        <div className="scrollable-container">
          {/* Heures */}
          <div className="hour-container">
            {Array.from({ length: 24 }, (_, index) => (
              <div
                key={index}
                className={`hour-item ${
                  index.toString().padStart(2, '0') === hour ? 'active-time' : ''
                }`}
                onClick={() => handleChangeHour(index.toString().padStart(2, '0'))}
              >
                {index.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
          {/* Minutes */}
          <div className="minute-container">
            {Array.from({ length: 60 }, (_, index) => (
              <div
                key={index}
                className={`minute-item ${
                  index.toString().padStart(2, '0') === minute ? 'active-time' : ''
                }`}
                onClick={() => handleChangeMinute(index.toString().padStart(2, '0'))}
              >
                {index.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dropdown>
  )
}

export default TimePickerB
