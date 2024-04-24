import classNames from 'classnames'
import Dot from '../Dot/Dot'
import { FC } from 'react'

export const ChartLegendGroup: FC<any> = ({ className, ...props }) => {
  const Classes = classNames({
    'chart-legend-group': true,
    [className]: className,
  })

  return <div className={Classes}>{props.children}</div>
}

const ChartLegend: FC<any> & any = ({ className, symbol, ...props }) => {
  const Classes = classNames({
    'chart-legend': true,
    [className]: className,
  })

  return (
    <div className={Classes}>
      <Dot variant={symbol} />
      <div className="chart-legend-text">
        <div className="title">{props.children}</div>
      </div>
    </div>
  )
}

ChartLegend.Group = ChartLegendGroup

export default ChartLegend
