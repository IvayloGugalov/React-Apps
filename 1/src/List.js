import React from 'react'
import Item from './Item'

const List = ({items, handleOnCheck, handleDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleOnCheck={handleOnCheck}
          handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default List