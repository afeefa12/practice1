import React from 'react'
import ShowPassword from './ShowPassword'
import Button from './Button'
import SignupForm from './SignUp'
import Form from './form'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import LoginForm from './Login'
import Question from './Question'

function App() {
  return (
    <div>
      <ShowPassword/>
      {/* <Button onclick={() => alert("Button Clicked")} text= "Click Me"/>
      <Button onclick={() => alert('Clicked ')} text= "Show"/> */}
      {/* <SignupForm/> */}
      {/* <Form/> */}
      
      {/* <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <SignupForm/> */}
      {/* <LoginForm/> */}
      {/* <Question/> */}
      <Route path='/products/:name' element={<details/>}/>
    </div>
  )
}

export default App