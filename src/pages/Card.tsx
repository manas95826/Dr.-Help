import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cardd = (props: any) => {
    const navigate = useNavigate();
  return (
    <div className='bg-slate-100 mt-5 ml-16 w-72 h-80 rounded-2xl hover:shadow-xl hover:shadow-amber-200'>
<h3 className='font-bold m-4 text-2xl border'>{props.name}</h3>
<p className='m-5 text-lg'>{props.desc}</p>
<p>{props.med}</p>
<Button variant={'link'} onClick={() => {navigate('/patient')}} >Know more</Button>
        </div>
  )
}

export default Cardd