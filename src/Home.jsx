import React from 'react'

const Home = () => {
  return (
    <div>
        
<div id='home' className='min-h-[80vh]  flex justify-between item-center gap-19'>
  <div id='left' className='h-100  flex flex-col justify-center item-center gap-4 px-10 py-7'>
<h2 className='text-5xl font-bold mt-10 '>love it when people
  swing to our page...</h2>
<p className='text-lg font-semibold  '>says, owner who's passionate about his work</p>
<p className='mb-3 ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex ipsam labore quam architecto nihil!</p>
<button className='bg-blue-500   text-white rounded w-1/5 py-2 text-center'>Register Now</button>
  </div>
  <div id='right' className='w-[40%] flex justify-center item-start pt-10 ' >
    <img className='h-80 w-80 object-cover rounded-full mt-7' src="https://plus.unsplash.com/premium_vector-1733308713888-a4c30060cbc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJyYW5kfGVufDB8fDB8fHww" alt="" />

  </div>
</div>
    </div>
  )
}

export default Home