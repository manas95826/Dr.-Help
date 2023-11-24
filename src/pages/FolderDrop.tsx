import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Cardd from './Card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'


const FolderDrop = () => {
  return (
    <div>
      <div className='flex flex-1 h-screen w-screen flex-col'>
        <div className='bg-gray-300 h-16 w-full'>
          <Link to='/upload-files' className='border border-black p-2 absolute left-5 top-2'>Get diagnosis</Link>
          <Link to='/sign-up' className='border border-black p-2 absolute left-1/2 top-2'>Logout</Link>

        </div>
        <div className='w-full gap-2 flex justify-center h-32 items-center'>
          Search
          <input type="text" className='border border-black w-80 h-8 rounded-xl p-3' />
        </div>
        <div className='flex flex-row'>
          <Cardd name='Hello' desc="heeeeheheheheh"/>
          <Cardd name='Hello' desc="heeeeheheheheh"/>
          

        </div>


      </div>

    </div>

  )
}

export default FolderDrop