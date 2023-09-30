import { useState } from 'react'
import Input from './Components/Input'
import Currencyinfo from './Hooks/currencyinfo'


function App() {
  const [amount, setamount] = useState("")
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)

  const cinfo=Currencyinfo(from)
  const options= cinfo ?Object.keys(cinfo):[];

  const convert=()=>{
    setconvertedamount(amount* cinfo[to])
  }


  return (
    <>
     <div className=' w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
     style={{backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600')`}} >
      <div className='w-full '>
        <div className='w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5  backdrop-blur-sm  bg-[#edede9]'>
          <form
          onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1' >
              <Input 
              label="From"
              amount={amount}
              currencyoptions={options}
              currencychange={(currency)=> setamount(amount)}
              selectcurrency={from}
              amountchange={(amount)=> setamount(amount)}
              />

            </div>
            <div className='w-full mb-4 mt-3'>
              <Input
              label="To"
             
              
              amount={convertedamount}
              currencyoptions={options}
              currencychange={(currency)=> setto(currency)}
              selectcurrency={to}
               />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
