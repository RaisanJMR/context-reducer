import { NavLink, Outlet } from 'react-router-dom'

export default function HrLayout() {
  return (
    <>
    
      <div className='hr'>
        <NavLink to='employee'>employee</NavLink>
        <NavLink to='recruitment'>recruitment</NavLink>
        <NavLink to='onboarding'>onboarding</NavLink>
        <NavLink to='reports'>reports</NavLink>
      </div>

      <main>
        <Outlet />
      </main>

    </>
  )
}
