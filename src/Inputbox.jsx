import React, { useId,useRef } from 'react'

function Inputbox({
  label,
  amount,
  onammountchange,
  oncurrencychange,
  currencyoption = [],
  ammountdisable = false,
  currencydisable = false,
  selectcurrency = "usd",
  className = ""//if user wants to give some css
}) {
  const ammt = useId();//ye use kr rhe label aur input ko bind krne ke liye ham normally bhi 
  //krsakte the dono ko same for aur id deke lekin naya hook dekhna tha  
  const inp=useRef(null);
  return (
    <div className={`flex p-3 bg-white rounded-lg text-sm ${className}`}>
      <div className='w-1/2'>
        <label className='text-black mb-2 w-full' htmlFor={ammt}>{label}</label>
        <input
          id={ammt}
          ref={inp}
          type="number"
          value={amount}
          placeholder='Amount'
          onChange={(e) => onammountchange && onammountchange(Number(e.target.value))}//ye dekhna padega chatgpt
          disabled={ammountdisable}
          onClick={()=>(inp.current?.select())}
          className='w-full outline-none bg-transparent py-1.5 shadow-lg rounded-md p-1' />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black mb-2 w-full'>Currency</p>
        <select 
          className='rounded-lg outline-none px-1 py-1 bg-gray-100 cursor-pointer '
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyoption.map((currency) => (//iss bracket ne dikkkat di
            <option key={currency} value={currency}>{currency}</option>//always pass key while looping in react
          ))}
        </select>
      </div>
    </div>
  )
}

export default Inputbox;