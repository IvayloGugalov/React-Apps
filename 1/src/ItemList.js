import React from 'react'
import List from './List'

function ItemList({items, handleOnCheck, handleDelete}) {


  return (
    <>
      <p>List with items</p>
      {items. length
        ? <List
            items={items}
            handleOnCheck={handleOnCheck}
            handleDelete={handleDelete} />
        : (
            <p style={{ margintTop: '2rem' }}>The list is empty</p>
          )
      }
    </>
  )
}

export default ItemList