/**
 *
 * Returns a new array of objects with new key 'name'
 * by object from array
 *
 * @param { Array } dataAssets - Array accumulation
 * @param { Array } dictExtra  - The array from which name is taken
 *
 * @return dataAssets with new key name
 */
export const getAssetsWithName = (dataAssets, dictExtra) => (
  dataAssets.map((item) => {
    const { baseAsset } = item
    const assetFromFrontend = dictExtra[baseAsset?.toLowerCase()]

    return { ...item, name: assetFromFrontend?.name }
  })
)

/**
 *
 *  Returns a filtered array of objects
 *  by keys and partial value match.
 *
 *  @remarks
 *  Temporary filtering method at the front
 *
 *  @param { Array } arr - Array to filter
 *  @param { string } value - Part of value to filter
 *  @param { Array<string> | string } key - key(s) to filter
 *
 *  @return Filtered arr by params arr and key(s)
 */
export const filterArrByValueKey = (arr, value, key) => {
  const filterByValues = (item) => {
    let isIncluded

    if(Array.isArray(key)) {
      isIncluded = key.map((key) => RegExp(value, 'i').test(item[key]))
      return isIncluded.reduce((acc, el) => acc || el)
    }

    return item[key].indexOf(value.toUpperCase()) !== -1
  }

  return arr.filter((item) => filterByValues(item))
}