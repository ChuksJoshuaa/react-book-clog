import React from 'react'

const Book = ({ img, title, author, price }) => {
  const clickHandler = () => {
    alert('Hello World')
  }

  const moreExample = (title) => {
    console.log(title)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(price)
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{price}</p>
      <button type='button' onClick={clickHandler}>
        Submit
      </button>
      <button type='button' onClick={() => moreExample(title)}>
        Delete
      </button>
    </article>
  )
}

export default Book
