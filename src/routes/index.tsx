import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from '@/pages/Home'
import ControlPage from '@/pages/Control'
import PanelPage from '@/pages/Panel'

function AppRoutes() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/control" element={<ControlPage />} />
            <Route path="/panel" element={<PanelPage />} />
        </Routes>
        </BrowserRouter>    
    </>    
  )
}

export default AppRoutes