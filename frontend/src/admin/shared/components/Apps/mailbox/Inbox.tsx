/* eslint-disable jsx-a11y/anchor-has-content */
import SimpleBar from 'simplebar-react'
import classNames from 'classnames'
import { Form } from 'react-bootstrap'

import { Icon } from '../..'
import { FC } from 'react'

const Inbox: FC<any> & any = ({ ...props }) => {
  return <SimpleBar className="nk-ibx-list">{props.children}</SimpleBar>
}

export const InboxItem: FC<any> = ({ onClick, ...props }) => {
  return (
    <div className="nk-ibx-item">
      <a onClick={onClick} href="#inbox-view" className="nk-ibx-link toggle-ibx-view"></a>
      {props.children}
    </div>
  )
}

export const InboxItemElem: FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    'nk-ibx-item-elem': true,
    [className]: className,
  })

  return <div className={compClass}>{props.children}</div>
}

export const InboxMenu: FC<any> = ({ ...props }) => {
  return <ul className="nk-ibx-menu">{props.children}</ul>
}

export const InboxMenuItem: FC<any> = ({ className, ...props }) => {
  const compClass = classNames({
    [className]: className,
  })

  return (
    <li className={compClass ? compClass : ''}>
      <a href="/#" className="nk-ibx-menu-item">
        {props.children}
      </a>
    </li>
  )
}

export const InboxSearch: FC<any> = () => {
  return (
    <div className="nk-ibx-head-search d-none d-md-flex">
      <Form.Group className="form-group">
        <div className="form-control-wrap">
          <div className="form-control-icon start text-light md">
            <Icon name="search"></Icon>
          </div>
          <Form.Control
            className="form-control-plaintext"
            size="lg"
            type="text"
            placeholder="Search Email"
          />
        </div>
      </Form.Group>
    </div>
  )
}

export const InboxNavigation: FC<any> = ({ ...props }) => {
  return <div className="nk-ibx-head-pagination">{props.children}</div>
}

export const InboxNavigationInfo: FC<any> = () => {
  return <div className="nk-ibx-head-info d-none d-xxl-block">1-50 of 2,619</div>
}

export const InboxToggle: FC<any> = ({ onClick, ...props }) => {
  return (
    <button onClick={onClick} className="btn btn-md btn-zoom btn-icon toggle-ibx-aside">
      <Icon name="menu-right"></Icon>
    </button>
  )
}

export const InboxTools: FC<any> = ({ ...props }) => {
  return <ul className="nk-ibx-head-tools">{props.children}</ul>
}

export const InboxToolsItem: FC<any> = ({ ...props }) => {
  return <li>{props.children}</li>
}

Inbox.Item = InboxItem
Inbox.Item.Elem = InboxItemElem
Inbox.Menu = InboxMenu
Inbox.Menu.Item = InboxMenuItem
Inbox.Search = InboxSearch
Inbox.Navigation = InboxNavigation
Inbox.Navigation.Info = InboxNavigationInfo
Inbox.Toggle = InboxToggle
Inbox.Tools = InboxTools
Inbox.Tools.Item = InboxToolsItem

export default Inbox
