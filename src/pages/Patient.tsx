import React from 'react'
import PatientCard from './PatientCard'
import { Link } from 'react-router-dom'

const Patient = () => {
  return (
    <div className='flex flex-1 justify-center items-center gap-48'>
        <div>
            <img src="/assets/defaultpfp.jpg" alt="" height={300} width={300} className='rounded-3xl'/>
        </div>
        <Link to="/" className='absolute top-3/4 left-64 border border-black p-2 rounded-xl'>Go back</Link>
        <PatientCard first="lorem" second="insanity" third="could've been better" fourth="lmao"/>
    </div>
  )
}

export default Patient