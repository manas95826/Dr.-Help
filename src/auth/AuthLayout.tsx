import React from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;
  return (
    <div>
      {
        isAuthenticated ? (
          <Navigate to='/' />
        ) : (
          <>
          <section className='flex flex-1 justify-center items-center flex-col'>
            <Outlet />
          </section>
          </>
        )
      }

    </div>
  )
}

export default AuthLayout