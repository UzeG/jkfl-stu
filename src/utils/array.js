/* eslint-disable */
export function doCompact(arr, size) {
  let res = []
  for (let i = 0; i < arr.length; i += size) {
    let item = []
    for (let j = 0; j < size && i+j < arr.length; j++) {
      item.push(arr[i+j])
    }
    res.push(item)
  }
  return res
}
