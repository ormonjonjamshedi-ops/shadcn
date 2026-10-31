import React, { memo } from 'react'

const Buttone = memo(({ text }) => {
  console.log("Buttone rendering")
  return (
    <div>
      {text || 'butt'}
    </div>
  )
})

export default Buttone