import React from 'react'
import { Routes,Route,Link, useRoutes, NavLink, useLocation } from 'react-router-dom'
import Book from './Book'
import BookList from './BookList'
import Home from './Home'
import NewBook from './NewBook'
import NotFound from './NotFound'
export default function App() {
  let element = useRoutes([
    {
      path:'/',
      element:'<Home />'
    },
    {
      path:'*',
      element:'<NotFound />'
    },
  ])

  const location = useLocation()
  return (
    <>
    <ul>
      <li><NavLink to='/' state="hi" >Home</NavLink></li>
      <li><Link to="/books">Book</Link></li>
    </ul>
    <Routes>
      <Route path="/" element ={<Home/>} />
      {/* <Route path='/books'>
        <Route path=':id' element ={<Book/>} />
        <Route path ='/new' element={<NewBook/>} />
      </Route> */}
      <Route path='/books' element={<BookList />} />
      <Route path='books/:id' element ={<Book/>} />
      <Route path='books/new' element ={<NewBook/>} />
      <Route path="*" element={<NotFound/>} /> 
      <Route />

    </Routes>
    </>
  )
}
