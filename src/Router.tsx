import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'
import { Suspense } from 'react';


export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="post" element={<Posts />}/>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </Suspense>
  )
}