import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/Home'
import ControlPage from '@/pages/Control'
import PanelPage from '@/pages/Panel'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/control" element={<ControlPage />} />
        <Route path="/panel" element={<PanelPage />} />
      </Routes>
    </BrowserRouter>
  )
}