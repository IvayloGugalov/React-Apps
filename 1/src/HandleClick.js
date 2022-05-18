import React from 'react'
import { useState } from 'react';

function HandleClick() {
  const [name, setName] = useState('Ivo');
  const [count, setCount] = useState(0);

  const handleChangeNameClick = (name) => {
    const currentCount = count + 1;

    setName(name);
    setCount(currentCount)
    console.log(name);
  }

  return (
    <section>
        <p>Hello {name}, you clicked {count}</p>
        <button onClick={() => handleChangeNameClick('Ivaylo')}>Click me</button>
      </section>
  )
}

export default HandleClick