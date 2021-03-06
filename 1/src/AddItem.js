import React, { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  /* Set the focus on the input text-box after we click Add Item*/
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}>
          Add Item
      </button>
    </form>
  )
}

export default AddItem