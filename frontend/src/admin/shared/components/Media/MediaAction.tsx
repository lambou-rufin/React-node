import React from 'react'
import classNames from 'classnames'
const MediaAction: React.FC<any> = ({ className, end, ...props }) => {
  const compClass = classNames({
    'media-action': true,
    'media-action-end': end,
    [className]: className,
  })
  return (
    <>
      <div className={compClass}> {props.children} </div>
    </>
  )
}

export default MediaAction
