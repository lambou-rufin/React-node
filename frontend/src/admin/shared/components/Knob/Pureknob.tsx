import { FC, useLayoutEffect, useRef } from 'react'

import pureknob from '../../../assets/js/pureknob/pureknob.js'
import { Colors } from '../../utilities/index'

const Pureknob: FC<any> = ({ data, className, ...props }) => {
  const knobRef = useRef<any>(null)

  useLayoutEffect(() => {
    if (knobRef.current) {
      const setData = data
      const size = setData.size ? setData.size : 100
      const angleStart = setData.angleStart ? setData.angleStart : 1
      const angleEnd = setData.angleEnd ? setData.angleEnd : 1
      const angleOffset = setData.angleOffset ? setData.angleOffset : false
      const colorBg = setData.colorBg ? setData.colorBg : Colors.gray200
      const colorFg = setData.colorFg ? setData.colorFg : Colors.primary
      const trackWidth = setData.trackWidth ? setData.trackWidth : 0.2
      const min = setData.min ? setData.min : 0
      const max = setData.max ? setData.max : 100
      const readonly = setData.readonly ? setData.readonly : true
      const value = setData.value ? parseInt(setData.value) : 0
      const hideValue = setData.hideValue ? 0 : 1

      // Create knob element, by given value size.
      const knob = pureknob.createKnob(size, size)

      // Set properties.
      knob.setProperty('angleStart', -angleStart * Math.PI)
      knob.setProperty('angleEnd', angleEnd * Math.PI)
      knob.setProperty('angleOffset', angleOffset * Math.PI)
      knob.setProperty('colorFG', colorFg)
      knob.setProperty('colorBG', colorBg)
      knob.setProperty('trackWidth', trackWidth)
      knob.setProperty('valMin', min)
      knob.setProperty('valMax', max)
      knob.setProperty('readonly', readonly)
      knob.setProperty('textScale', hideValue)

      // Set initial value.
      knob.setValue(value)

      // Create element node.
      const node = knob.node()

      // Add it to the DOM.
      knobRef.current.appendChild(node)

      return () => {
        knobRef.current = null
      }
    }
  })

  return (
    <div ref={knobRef} className={className}>
      {props.children}
    </div>
  )
}

export default Pureknob
