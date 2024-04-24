import classNames from 'classnames'
import { FC } from 'react'

export const ChartLabelGroup: FC<any> = ({ className, ...props }) => {
  const Classes = classNames({
    'chart-label-group': true,
    [className]: className,
  })

  return <div className={Classes}>{props.children}</div>
}

const ChartLabel: FC<any> & any = ({ className, ...props }) => {
  const Classes = classNames({
    'chart-label': true,
    [className]: className,
  })

  return (
    <div className={Classes}>
      <div className="title">{props.children}</div>
    </div>
  )
}

// dot notation component
ChartLabel.Group = ChartLabelGroup

export default ChartLabel
