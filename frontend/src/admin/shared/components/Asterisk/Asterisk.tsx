import React, { FC } from 'react'
import classNames from 'classnames'

import { Icon } from '..'

const Asterisk: FC<any> = ({ btnClass }) => {
  const btnClasses = classNames({
    [btnClass]: btnClass,
  })

  return (
    <div className="asterisk">
      <a className={btnClasses ? btnClasses : ''} href="/#">
        <Icon className="asterisk-off" name="star"></Icon>
        <Icon className="asterisk-on" name="star-fill"></Icon>
      </a>
    </div>
  )
}

export default Asterisk
