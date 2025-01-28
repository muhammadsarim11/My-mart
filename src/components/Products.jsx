import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'
const Products = () => {
  const [productdata,setproductdata] = useState([])
  
  const getdata= async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)

     setproductdata(response.data)
    
  }

  useEffect(() => {
    getdata()
  
  }, [])
  
  return (
    <div className='min-h-[100vh] w-screen flex items-center justify-center flex-wrap  p-5 gap-5'>
      {/* <h1 className='text-4xl font-bold text-center pt-4 '>Explore our products</h1> */}
    {
      productdata.map((elem,idx)=>{
        return(
          <div key={idx} className='h-[400px] w-[300px]
            rounded border   border-gray-400 overflow-y-auto p-4   m-4'>
     
     <img className='h-[150px] w-[300px] object-contain rounded-tl rounded-tr' src={elem.image} alt="" />
<h2 className='text-xl py-2 font-medium'>{elem.title}</h2>
<p className='text-sm'>{elem.description}</p>
     </div>
    
        )
      })
    }
    </div>
        
  
      )

}


export default Products