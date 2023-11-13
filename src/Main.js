import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Hr from './pages/Hr'
import HrLayout from './Layout/HrLayout'
import Employee from './pages/Employee'
import OnBoarding from './pages/OnBoarding'
import Recruitment from './pages/Recruitment'
import Reports from './pages/Reports'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='hr' element={<HrLayout />}>
        <Route index element={<Hr />} />
        <Route path='employee' element={<Employee />} />
        <Route path='onboarding' element={<OnBoarding />} />
        <Route path='recruitment' element={<Recruitment />} />
        <Route path='reports' element={<Reports />} />
      </Route>
    </Route>
  )
)

export default function Main() {
  return <RouterProvider router={router} />
}
