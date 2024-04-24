import classNames from 'classnames'
import { Button } from 'react-bootstrap'

import { Icon } from '../../../components'
import { useLayout, useLayoutUpdate } from '../LayoutProvider'

const Navbar: React.FC<any> = ({ icon, className }) => {
  const layout = useLayout()
  const layoutUpdate = useLayoutUpdate()

  const btnClass = classNames({
    'btn-icon d-none d-sm-inline-flex navbar-toggle': true,
    active: layout.headerActive,
  })

  const btnSmClass = classNames({
    'btn-icon d-sm-none navbar-toggle': true,
    active: layout.headerActive,
  })

  const compClass = classNames({
    'nk-navbar-toggle': true,
    [className]: className,
  })

  return (
    <div className={compClass}>
      <Button size="sm" variant="zoom" onClick={layoutUpdate.headerMobile} className={btnSmClass}>
        <Icon name={icon || 'menu-right'} />
      </Button>
      <Button size="lg" variant="zoom" onClick={layoutUpdate.headerMobile} className={btnClass}>
        <Icon name={icon || 'menu-right'} />
      </Button>
    </div>
  )
}

export default Navbar
