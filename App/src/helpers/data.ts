export const getAssetsWithName = (dataAssets, dictExtra) => (
  dataAssets.map((item) => {
    const { baseAsset } = item
    const assetFromFrontend = dictExtra[baseAsset?.toLowerCase()]

    return { ...item, name: assetFromFrontend?.name }
  })
)