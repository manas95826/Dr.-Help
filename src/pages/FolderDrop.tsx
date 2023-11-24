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


const FolderDrop = () => {
  return (
    <div>
      <div className='flex flex-1 h-screen w-screen flex-col'>
        <div className='bg-gray-300 h-16 w-full z-10'>
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