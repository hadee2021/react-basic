import React from 'react'

const Box = ({name, num}) => {
  return (
    <div className='box'>
      Box{num}
      <p>{name}</p>
    </div>
  )
}

export default Box