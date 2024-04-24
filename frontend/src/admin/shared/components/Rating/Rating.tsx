import classNames from 'classnames'
import { FC } from 'react'

const Rating: FC<any> = ({ className, rating, ...props }) => {
  const elemClass = classNames('rating', className)

  const ratingValue = Math.floor(rating)
  const baseRatingValue = 5

  return (
    <ul className={elemClass}>
      <RatingItem icon="star-fill" className="checked" count={ratingValue} />
      {baseRatingValue - ratingValue > 0 && (
        <RatingItem icon="star" count={baseRatingValue - ratingValue} />
      )}
    </ul>
  )
}

const RatingItem: FC<any> = ({ className, ...props }) => {
  const elemClass = classNames('rating-label', className)

  const items = []
  for (let i = 0; i < props.count; i++) {
    const key = (Math.random() + 1).toString(36).substring(7)
    items.push(
      <li key={key} className={elemClass}>
        <em className={`icon ni ni-${props.icon}`}></em>
      </li>,
    )
  }
  return items
}

export default Rating
