import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({ children }: {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <Link href='/' className='flex items-center gap-2'>
           <Image src='/logo.svg' alt='Logo' width={38} height={32}/>
           <h2 className='text-primary-100'>prepMate</h2>
      </Link>
      {children}
    </div>
  )
}

export default RootLayout
