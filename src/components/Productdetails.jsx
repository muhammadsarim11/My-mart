import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

const Productdetails = () => {
    let {id} = useParams()
    console.log(id)

    const [productdata, setproductdata] = useState([])
    const getdata = ()=>{

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://fakestoreapi.com/products/${id}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          setproductdata(([response.data]));

        })
        .catch((error) => {
          console.log(error);
        });

    }

    useEffect(() => {
        getdata()
    
    }, [])
    
  return (
<div>

    {
        // productdata <=0?<h1 className='text-center text-3xl'>loading..</h1>:
    productdata.map((elem,idx)=>{
        return(

<div className=' mt-10 flex justify-center items-center flex-wrap gap-10'>

<div key={idx} className='h-100 w-100  flex justify-center items-center flex-col border py-5 px-3 '>
    <img className='w-full h-40 object-contain' src={elem.image} alt="" />
    <h1 className='font-medium text-xl'>{elem.title}</h1>
    <h3 className='text-sm font-light'>{elem.description}</h3>
  
</div>
<div key={idx} className='h-80 w-150  p-10'>
    <h1 className='text-2xl font-medium pb-5'> title:{elem.title}</h1>
    <p className=' text-gray-700 pb-5'>description:{elem.description}</p>
    <p className='text-sm font-medium'>price:{elem.price}</p>
    <p className='text-sm font-light'>rating:{elem.rating.rate}</p>

</div>
</div>
        )
    })

    }
    
        
    
    </div>
    
    
)
}


export default Productdetails