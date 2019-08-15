export function multiselectionFilter(key, multipleItemSelected, dataset) {
  let itemsArr = []
  let itemsArrCurrent = []
  for(let x in multipleItemSelected) {
    itemsArrCurrent = dataset.filter(item => {
      return (item[key] === multipleItemSelected[x]) 
    });
    itemsArr = itemsArr.concat(itemsArrCurrent)
  }
  return itemsArr
}