import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './presentation/pages/Home.tsx'
import MainLayout from './presentation/layouts/MainLayout.tsx'
import SavedPosts from './presentation/pages/SavedPosts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/saved-posts' element={<SavedPosts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
