const getParents: any = (el: any, selector: any, filter: any) => {
  // If no selector defined will bubble up all the way to *document*
  const parentSelector = selector === undefined ? document : document.querySelector(selector)
  const parents: any = []
  let pNode = el.parentNode

  while (pNode !== parentSelector) {
    const element = pNode

    if (filter === undefined) {
      parents.push(element) // Push that parentSelector you wanted to stop at
    } else {
      element.classList.contains(filter) && parents.push(element)
    }
    pNode = element.parentNode
  }

  return parents
}

export default getParents
