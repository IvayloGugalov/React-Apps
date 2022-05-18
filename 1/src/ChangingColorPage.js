import React, { useState } from 'react'
import colornames from 'colornames';

const ChangingColorPage = () => {

  const [colorValue, setColorValue] = useState('');
  const [rectangleText, setRectangelText] = useState('Empty value');

  const searchColor = (color) => {
    setColorValue(color)
  }

  const setText = (text) => {
    if (!text) {
      setRectangelText('Empty value');
    } else {
      setRectangelText(text)
    }
  }

  return (
    <>
      <div className='rectangle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colorValue, }}>
        <h3>{rectangleText}</h3>
      </div>

      <form className='searchColorForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Add color name</label>
        <input
          autoFocus
          id='search'
          type='text'
          role='searchBox'
          placeholder='Add color name'
          value={colorValue}
          onChange={(e) => {
            searchColor(e.target.value)
            setText(e.target.value)
          }}/>
      </form>
   </>
  )
}

export default ChangingColorPage