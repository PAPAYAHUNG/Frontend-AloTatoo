import React from 'react'
import { StyledWrapperMorphic } from '../ProductCard'

const Chip = ({item}:any) => {
  return (
    <StyledWrapperMorphic className="p-2 border border-sky-500  rounded-lg">
    {item?.filter}
  </StyledWrapperMorphic>
  )
}

export default Chip