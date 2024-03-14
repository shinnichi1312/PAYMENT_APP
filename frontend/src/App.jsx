import { Suspense } from 'react'
import { Dashboard } from './pages/Dashboard'
import { Send } from './pages/Send'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path='/signup' element = {<Suspense fallback="loading..."><Signup/></Suspense>} />
              <Route path='/signin' element = {<Suspense fallback="loading..."><Signin/></Suspense>} />
              <Route path='/dashboard' element = {<Suspense fallback="loading..."><Dashboard/></Suspense>} />
              <Route path='/send' element = {<Suspense fallback="loading..."><Send/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
