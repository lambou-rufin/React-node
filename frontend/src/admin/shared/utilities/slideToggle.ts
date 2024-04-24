import slideUp from './slideUp'
import slideDown from './slideDown'

const slideToggle = (target: any, duration: any = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideUp(target, duration)
  } else {
    return slideDown(target, duration)
  }
}

export default slideToggle
