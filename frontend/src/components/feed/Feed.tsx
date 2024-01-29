import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import PostPage from '../../pages/post/PostPage'
import PrivateRoutes from '../PrivateRoutes'
import UserPage from '../../pages/user/UserPage'

const Feed = () => {

  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Navigate replace to="/home" />}></Route>
        <Route path='/posts' element={<PostPage />}></Route>
        <Route path='/users' element={<UserPage />}></Route>
      </Route>
    </Routes>
  )
}

export default Feed
