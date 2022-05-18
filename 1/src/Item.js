import React from 'react'

const Item = ({item, handleOnCheck, handleDelete}) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={() => handleOnCheck(item.id)} />
      <label
        style={(item.checked)
          ? {textDecoration: 'line-through'}
          : null}>
        {item.name}</label>
        <label
          onDoubleClick={() => handleOnCheck(item.id)}
          style={{fontSize: 15}} >
          Double click me!!</label>
      <button
        onClick={() => handleDelete(item.id)}>
          Delete
      </button>
    </li>
  )
}

export default Item