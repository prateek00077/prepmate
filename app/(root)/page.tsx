import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
       <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Practice on real interview questions & get instant feedback</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start and Interview</Link>
          </Button>
        </div>
        <Image src='/robot.png' alt='robot' width={400} height={400} className='max-sm:hidden' />
       </section>
       <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id}/>
          ))}
          {/*<p>Your haven't taken any interviews yet</p>*/}
        </div>
       </section>
       <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/*<p>There are no Interviews available</p>*/}
        </div>
       </section>
    </>
  )
}

export default page
