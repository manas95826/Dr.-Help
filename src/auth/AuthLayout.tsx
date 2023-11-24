import React from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'





const AuthLayout = () => {
  

  


  const navigate = useNavigate();
  const isAuthenticated = false;
  return (
    <div className='flex flex-row flex-1'>
      {
        isAuthenticated ? (
          <Navigate to='/' />
        ) : (
          <>
          <section className='flex w-1/2 justify-center items-center flex-col gap-6'>
            <img src="/assets/mainlogo.svg" alt="" height={350} width={350} className='border border-black p-5 rounded-2xl'/>
            <Outlet />
          </section>
          <img src="/assets/authimg.jpeg" height={600} width={600} alt="" 
          className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
          />
          </>
        )
      }

    </div>
  )
}

export default AuthLayout