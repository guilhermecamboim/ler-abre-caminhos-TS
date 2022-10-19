import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'


export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="post" element={<Posts />}/>
      </Route>
    </Routes>
  )
}