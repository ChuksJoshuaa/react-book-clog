import React, { Children } from 'react'
import reactDom from 'react-dom'
//import CSS
import './index.css'

import { books } from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

reactDom.render(<BookList />, document.getElementById('root'))
