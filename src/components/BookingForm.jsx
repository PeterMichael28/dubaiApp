import '../css/BookingForm.css'
import React, {useState} from 'react'
import { BsPeople } from "react-icons/bs";
import {AiOutlineDown} from "react-icons/ai";
import {BsPeopleFill} from "react-icons/bs";
import {MdOutlineDateRange} from "react-icons/md";
import {GrDown} from "react-icons/gr";
import {GrUp} from "react-icons/gr";
import { useEffect } from 'react';

const BookingForm = () => {

  const input = document.getElementById( 'input' )

  const [ num, setNum ] = useState( 0 )
  const [ num2, setNum2 ] = useState( 0 )
  const [toggle, setToggle] = useState( false)
  const [ toggle2, setToggle2 ] = useState( false )
  const [ toggleDate, setToggleDate ] = useState( true )
  const [date, setDate] = useState('')
  const [date2, setDate2] = useState('')
  

  //Adult +1 
  const handlePlus = () => {
    setNum(num + 1)
  };
 
  //Adult -1 
  const handleMinus = () => {
    if ( num < 1 ) {
      setNum( 0 );
    } else {
        setNum(num - 1)
    }
    
  };

  //Children -1 
  const handleMinus2 = () => {
    if ( num2 < 1 ) {
      setNum2( 0 );
    } else {
        setNum2(num2 - 1)
    }
    
  }
  //Children +1 
  const handlePlus2 = () => {
    setNum2(num2 + 1)
  }

  useEffect( () => {
      //date conversion
  const handleDate = () => {

    if ( date ) {

    
      const [ year, month, day ] = date.split( '-' );
      const joinDate = new Date( year, month, day ).toDateString()
      setDate2( joinDate );

      // console.log(date)
    }
    if(!date) setDate2('')

    }
    
    handleDate();
  }, [date])




  


  return (
      <form action="" className='flex flex-col gap-6 p-4 bg-[#2A2D46] max-w-[550px] mt-8 mx-3 md:ml-16'>
          <h1 className='text-white font-bold text-[1.4rem]'>Book your tour</h1>
          <div className='flex flex-col '>
      <div className='containe w-full'>
      <div className='div'>
        <div className='fir'  onClick={() => setToggle(!toggle)}>
          <BsPeople className='text-[1rem]' />
          
          { num > 0 && <span>{ num}</span>}
        Adult(s)
        </div>
       {toggle?  <GrUp onClick={() => setToggle(!toggle)}  /> :  <GrDown onClick={() => setToggle(!toggle)}  />}
        { toggle && <div className='abs'>
          <div className='text'>
           Adult(s)
           <span>Age (12-70)</span>
          
          </div>
          <div className='input'>
          <span onClick={handleMinus}>-</span>
          <input type="telephone" value={num} onChange={(e => setNum(e.target.value))} />
         <span onClick={handlePlus}>+</span>
          </div>
            
          

        </div>}
        </div>

        <div className='div' >
        <div className='fir' onClick={() => setToggle2(!toggle2)} >
        <BsPeople className='text-[1rem]' />
          
          { num2 > 0 && <span>{ num2}</span>}
        Children(s)
        </div>
       { toggle2 ? <GrUp className='' onClick={() => setToggle2(!toggle2)}  /> : <GrDown className='' onClick={() => setToggle2(!toggle2)}  />}
        { toggle2 && <div className='abs'>
          <div className='text'>
           Children(s)
           <span>Age (0-11)</span>
          
          </div>
          <div className='input'>
          <span onClick={handleMinus2}>-</span>
          <input type="telephone" value={num2} onChange={(e => setNum2(e.target.value))} />
         <span onClick={handlePlus2}>+</span>
          </div>
            
          

        </div>}
        </div>
        </div>
        <div className='relative mt-9 '>
          {<MdOutlineDateRange className='absolute top-[.6rem] left-2 text-[1.5rem]' onClick={ () => {
            input.type = 'date';
            setToggleDate(false)
          } } /> }
       <input
        type="text"
        id='input'
        value={input && input.type === 'text'? date2 : date}
            onChange={ (e) => setDate(e.target.value)}
            onFocus={ ( e ) => {
              ( e.target.type = "date" );
              setToggleDate(false)
            } }
            onBlur={ ( e ) => {
              ( e.target.type = "text" );
              setToggleDate( true );
            } }
            className='py-[.7rem] px-10 w-[100%] mx-auto placeholder:text-[.9rem] placeholder:font-semibold placeholder:text-[#000]' placeholder='Choose your date' />
          { toggleDate && <GrDown className='absolute cursor-pointer top-4 right-2 -z-1' onClick={ () => {
          if(input) input.focus();
          } } /> }
        </div>
          </div>
          <a href="#" className=" bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-bold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s] flex items-center justify-center" >Book Now</a>
    </form>
  )
}

export default BookingForm