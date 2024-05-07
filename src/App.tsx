import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from './component/RootLayout'
import { Bags } from './pages/Bags'
import { Bracelets } from './pages/Bracelets'
import { Bucket } from './pages/Bucket'
import { Contact } from './pages/Contact'
import { Designer } from './pages/Designer'
import { Discover } from './pages/Discover'
import { Earings } from './pages/Earings'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Newin } from './pages/Newin'
import { Registration } from './pages/Registration'
import { Rings } from './pages/Rings'
import { SearchPage } from './pages/SearchPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/rings' element={<Rings />} />
          <Route path='/earings' element={<Earings />} />
          <Route path='/bracelets' element={<Bracelets />} />
          <Route path='/newin' element={<Newin />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/designer' element={<Designer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/bags' element={<Bags />} />
          <Route path='/bucket' element={<Bucket />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
