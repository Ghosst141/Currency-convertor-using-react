import { useRef, useState } from 'react'
import useCurrencyinfo from './cus hook/UseCurrencyinfo.js'
import Inputbox from './Inputbox.jsx';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyinfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>
            <div className='flex bg-cover justify-center items-center w-full h-screen'
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}>
               <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    convert();
                }}>
                    <div className='w-full mb-1'>
                        <Inputbox
                        label="From"
                        amount={amount}
                        currencyoption={options}
                        selectcurrency={from}
                        onammountchange={(amt)=>setAmount(amt)}
                        oncurrencychange={(cur)=>setFrom(cur)}
                        />
                    </div>
                    <div className='relative w-full'>
                        <button type='button' onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>Swap</button>
                    </div>
                    <div className='w-full mt-1'>
                        <Inputbox
                        label="To"
                        amount={convertedAmount}
                        currencyoption={options}
                        selectcurrency={to}
                        oncurrencychange={(cur)=>setTo(cur)}
                        ammountdisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
               </div>
            </div>
        </>
    )
}

export default App
