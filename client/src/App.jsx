import { ToastContainer } from 'react-toastify'
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { AddReview } from './pages/AddReview'
import { DisplayAllMovies } from './pages/DisplayAllMovies'
import { DisplayMyReviews } from './pages/DisplayMyReviews'
import { ShareReview } from './pages/ShareReview'
import { DisplayAllReview } from './pages/DisplayAllReview'
import { EditProfile } from './pages/EditProfile'
import { ChangePass } from './pages/ChangePass'

function App() {
 
  return (
   <>
     <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='home' element={<Home/>}>
            <Route path='display-all-movies' element={<DisplayAllMovies/>}/>
            <Route path='my-reviews' element={<DisplayMyReviews/>} />
            <Route path='shared-with-me' element={<ShareReview/>}/>
            <Route path='all-reviews' element={<DisplayAllReview/>} />
            <Route path='edit-profile' element={<EditProfile/>} />
            <Route path='change-password'  element={<ChangePass/>}/>
            <Route path='add-review' element={<AddReview/>}></Route>
        </Route>
        
     </Routes>
     <ToastContainer/>
   </>
  )
}

export default App
