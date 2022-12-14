import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'
import { Suspense } from 'react';
import { NotFound } from './pages/NotFound';
import { Publish } from './pages/Publish/Publish';
import { Contact } from './pages/Contact';
import { About } from './pages/About';


export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/posts/:postId" element={<Posts />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/cadastrar" element={<Publish />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}