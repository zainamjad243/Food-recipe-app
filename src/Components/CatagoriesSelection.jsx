import React from 'react'

import fatchData from './fatchData'

const CatagoriesSelection = ({title , fetchUrl}) => {
  const {data , loading , error} = fatchData(fetchUrl);
  // console.log(data)
  return (
    <div>
      zain
    </div>
  )
}

export default CatagoriesSelection
