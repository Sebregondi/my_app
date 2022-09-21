import React from 'react'

const ItemListContainer = ( {greeting} ) => {
  return (
    <span className='font-mono text-lg bg-red-200 text-gray-600 m-10'> {greeting}</span>
  )
}

export default ItemListContainer