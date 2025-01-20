import React from 'react'

function Planned() {
  const createdAtString = new Date().toISOString().slice(0, 10)

  return <div>{createdAtString}</div>
}

export default Planned
