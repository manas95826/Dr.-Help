const PatientCard = (props: any) => {
  return (
    <div className='w-1/2 h-2/3 border border-black bg-slate-200 rounded-xl'>
<p className='font-bold m-4'>Recent Medical Report</p>


<p className='ml-5 mt-2'>1. {props.first}</p>
<p className='ml-5 mt-2'>2. {props.second}</p>

<p className='ml-5 mt-2'>3. {props.third}</p>

<p className='ml-5 mt-2'>4. {props.fourth}</p>


    </div>
  )
}

export default PatientCard
