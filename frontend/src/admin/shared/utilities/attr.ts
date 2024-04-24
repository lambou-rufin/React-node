const attr: any = (selector: any, property: any, value: any) => {
  const att = document.createAttribute(property)
  att.value = value
  selector.setAttributeNode(att)
}

export default attr
