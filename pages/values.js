import Head from 'next/head'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import Loading from '@/components/loading'
import { useEffect, useState } from "react";

function Values() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // Display a loading indicator
            setLoading(true)
            // Fetch the the value of each coin
            const response = await fetch('/api/values')
            const data = await response.json()
            console.log(data)
            setData(data)
            setLoading(false)
            
            
        }
        fetchData()
    }, [])

    if (isLoading) return <Loading />
    if (!data) return <p>Failed to load</p>
    
    return (
        <>
        <Head>
          <title>Values</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
  
        <Navbar />
        <Header title="Values"/>

        <div className="bg-gray-300 sm:h-screen h-full">
    <div className='flex space-x-40 justify-center'>
        <div className='bg-white text-black dark:bg-black dark:text-white rounded overflow-hidden shadow-lg p-6 w-56 -mt-9'>
            <h2 className='text-2xl text-center pb-2'>Maletic Money</h2>
            <p className='text-4xl text-center pb-4'>${data["Maletic Money"].current_value}</p>
        </div>
        <div className='bg-white text-black dark:bg-black dark:text-white rounded overflow-hidden shadow-lg p-6 w-56 -mt-9'>
            <h2 className='text-2xl text-center pb-2'>Nesty Coin</h2>
            <p className='text-4xl text-center pb-4'>${data["Nesty Coin"].current_value}</p>
        </div>
        <div className='bg-white text-black dark:bg-black dark:text-white rounded overflow-hidden shadow-lg p-6 w-56 -mt-9'>
            <h2 className='text-2xl text-center pb-2'>Giovanni Token</h2>
            <p className='text-4xl text-center pb-4'>${data["Giovanni Token"].current_value}</p>
        </div>
    </div>
</div>





  
       
      </>
    )
}

export default Values