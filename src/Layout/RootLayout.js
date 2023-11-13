import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='wrapper'>
      <header>header</header>
      <section>
        <nav>
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/hr`}>Hr</NavLink>
          <NavLink to={`/about`}>About</NavLink>
          <NavLink to={`/contact`}>Contact</NavLink>
        </nav>
        <aside>
          <Outlet />
        </aside>
      </section>
    </div>
  )
}
