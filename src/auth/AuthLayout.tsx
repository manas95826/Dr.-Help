import React from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const AuthLayout = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  const navigate = useNavigate();
  const isAuthenticated = false;
  return (
    <div className='flex flex-row flex-1'>
      {
        isAuthenticated ? (
          <Navigate to='/' />
        ) : (
          <>
          <section className='flex flex-1 justify-center items-center'>
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