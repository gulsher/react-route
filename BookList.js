import React from 'react'
import { Link } from 'react-router-dom'

export default function BookList() {
  return (
    <>
    <div>BookList</div>
    <Link to="/books/1" >Book1 </Link>
    <br/>
    <Link to="/books/2" >Book2 </Link>
    <br/>

    <Link to="/books/new" >New Book </Link>
    </>
  )
}
