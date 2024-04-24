import classNames from 'classnames'

const ChatList: React.FC<any> & { Item: React.FC<any> } = ({ ...props }) => {
  return <ul className="nk-chat-list">{props.children}</ul>
}

export const ChatListItem: React.FC<any> = ({ onClick, className, ...props }) => {
  const compClass = classNames({
    'toggle-chat-item': true,
    [className]: className,
  })

  return (
    <li className={compClass} onClick={onClick}>
      {props.children}
    </li>
  )
}

ChatList.Item = ChatListItem

export default ChatList
