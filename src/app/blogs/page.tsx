import React from 'react'
import { headingStyle } from '@/app/lib/util/styles'

function Page() {
  return (
    <div className='justify-center align-items-center self-center items-center flex flex-col h-full' style={{ margin: "2rem 0"}}>
      <h1 style={headingStyle}>
        My Blogs
      </h1>
    </div>
  )
}

export default Page
