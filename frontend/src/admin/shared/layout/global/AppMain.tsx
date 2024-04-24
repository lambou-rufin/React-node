import React from 'react'
import classNames from 'classnames'

const AppMain: React.FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    'nk-main': true,
    [`${className}`]: className,
  })
  return <div className={compClass}>{props.children}</div>
}

export default AppMain
