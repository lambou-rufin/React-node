import { FC, useEffect } from 'react'

import svgMap from 'svgmap'

const WorldMap: FC<any> = ({ id, data, ...props }) => {
  let itemId = id

  useEffect(() => {
    if (itemId) {
      const setData = data
      new svgMap({
        targetElementID: itemId,
        colorMax: setData.colorMax,
        colorMin: setData.colorMin,
        colorNoData: setData.colorNoData,
        data: setData.data,
      })
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemId = null
    }
  })
  return <div className="js-svgmap-zoom-off" id={itemId}></div>
}

export default WorldMap
