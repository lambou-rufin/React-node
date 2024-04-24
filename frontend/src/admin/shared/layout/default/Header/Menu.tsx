import classNames from 'classnames'
import React, { FC } from 'react'



import { Link, NavLink } from 'react-router-dom'

import { Icon } from '../../../components'

const MenuItemTemplate: React.FC<any> = ({ text, icon }) => {
  return (
    <>
      {icon && (
        <span className="nk-nav-icon">
          <Icon name={icon}></Icon>
        </span>
      )}
      {text && <span className="nk-nav-text">{text}</span>}
    </>
  )
}

const MenuItemLink: React.FC<any> = ({
  text,
  icon,
  sub,
  to,
  blank,
  onClick,
  onMouseEnter,
  className,
  ...props
}) => {
  const compClass = classNames({
    'nk-nav-link': true,
    'nk-nav-toggle': sub,
    [className]: className,
  })
  return (
    <>
      {!blank && !sub && (
        <NavLink className={compClass} to={to}>
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </NavLink>
      )}
      {blank && (
        <Link className={compClass} to={to} target="_blank">
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </Link>
      )}
      {sub && (
        <a className={compClass} onClick={onClick} onMouseEnter={onMouseEnter} href="#expand">
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </a>
      )}
    </>
  )
}

const MenuItem: React.FC<any> = ({ sub, className, ...props }) => {
  const compClass = classNames({
    'nk-nav-item': true,
    'has-sub': sub,
    [className]: className,
  })
  return <li className={compClass}>{props.children}</li>
}

const MenuSub: React.FC<any> = ({ mega, size, megaSize, className, megaClassName, ...props }) => {
  const compClass = classNames({
    'nk-nav-sub': true,
    [`nk-nav-sub-${size}`]: size,
    [className]: className,
  })
  const megaClass = classNames({
    'nk-nav-mega': true,
    [`nk-nav-mega-${megaSize}`]: megaSize,
    [megaClassName]: megaClassName,
  })
  return (
    <>
      {!mega && <ul className={compClass}>{props.children}</ul>}
      {mega && (
        <div className={compClass}>
          <div className={megaClass}>{props.children}</div>
        </div>
      )}
    </>
  )
}

const MenuList: React.FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    'nk-nav': true,
    [className]: className,
  })
  return <ul className={compClass}>{props.children}</ul>
}

const Menu: FC<{
  breadCrumb: any
  style?: any
  className?: string
}> = ({ breadCrumb, style, className }) => {
  return <div style={{ display: 'inline-block', ...style }} className={className}>{breadCrumb}</div>
}

export default Menu
