import React from 'react'
import classNames from 'classnames'
const Media: React.FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    'media-text': true,
    [className]: className,
  })
  return (
    <>
      <div className={compClass}> {props.children} </div>
    </>
  )
}

export default Media
