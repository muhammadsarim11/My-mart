import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [status,setstatus]= useState(false)
  const [index,setIndex]=useState()

  const handleSubmit = () => {
    if (newReview) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  const updateReview = ()=>{
    reviews[index] = newReview
    setstatus(false)
    setNewReview('')
  }

  const editReview =(i)=>{
setNewReview(reviews[i])
setstatus(true)
setIndex(i)
  }

  return (
    <div className='min-h-[100vh] bg-gray-100 p-10'>
      <div className='h-60 px-5 py-5 w-full rounded bg-white flex flex-col gap-5  border border-gray-300'>
        <h2 className='text-2xl font-medium'>write a review</h2>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder='share your thoughts with us...'
          className='rounded h-3/5 w-3/5 border outline-none p-2'
        ></textarea>
        <div className='flex justify-between w-3/5'>
       { status?<button onClick={()=>{
updateReview()
       }} className='bg-green-500 py-1 px-4 text-white rounded'>update</button>:
          <button onClick={handleSubmit} className='bg-blue-500 text-white py-1 px-5 rounded'>
            submit
          </button>
}
        </div>
      </div>
      <div  className='h-30 px-5 py-5 w-full rounded bg-white mt-5 border border-gray-300'>
          <h1 className='text-xl font-medium'>Reviews</h1>
          <p className='text-lg py-2'>"your products are amazing.."</p>
         
        </div>

      {reviews.map((elem, idx) => (
        <div key={idx} className='h-40 px-5 py-5 w-full rounded bg-white mt-5   border border-gray-300'>
          <h1 className='text-xl font-medium'>Reviews</h1>
          <p className='text-lg py-2 mb-4'>"{elem}"</p>
          <button onClick={()=>{
            editReview(idx)
          }} className='bg-green-500 text-white py-1 px-5 rounded'>edit</button>
        </div>
      ))}
    </div>
  );
};

export default Reviews;