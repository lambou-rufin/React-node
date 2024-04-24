import classNames from 'classnames'
import { FC } from 'react'

const Dot: FC<any> = ({ className, variant, ...props }) => {
  const Classes = classNames({
    dot: true,
    [`bg-${variant}`]: variant,
    [className]: className,
  })

  return <span className={Classes}></span>
}

export default Dot
