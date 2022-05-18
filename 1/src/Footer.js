import React from 'react'

export const Footer = ({length}) => {
  const currentDate = new Date();
  return (
    <footer>
      <p>List of {length} {length === 1 ? 'item' : 'items'}</p>
      <p>&copy; {currentDate.getFullYear()}</p>
    </footer>
  )
}
