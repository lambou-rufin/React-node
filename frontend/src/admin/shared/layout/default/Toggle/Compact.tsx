import classNames from 'classnames'
import Button from 'react-bootstrap/Button'

import { Icon } from '../../../components'
import { useLayout, useLayoutUpdate } from '../LayoutProvider'

const Compact: React.FC<any> = ({ icon }) => {
  const layout = useLayout()
  const layoutUpdate = useLayoutUpdate()

  const btnClass = classNames({
    'btn-icon text-light compact-toggle': true,
    active: layout.sidebarCompact,
  })

  return (
    <div className="nk-compact-toggle me-n1">
      <Button
        size="lg"
        variant="no-hover"
        onClick={layoutUpdate.sidebarCompact}
        className={btnClass}
      >
        <Icon className="off" name={icon || 'chevrons-left'} />
        <Icon className="on" name={icon || 'chevrons-right'} />
      </Button>
    </div>
  )
}

export default Compact
