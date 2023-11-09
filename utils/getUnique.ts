const getUnique = (array: any[], uniqueItem: string) => {
  const allItems = array.map((item) => item[uniqueItem])
  return allItems.filter((item, index) => allItems.indexOf(item) === index)
}

export { getUnique }
