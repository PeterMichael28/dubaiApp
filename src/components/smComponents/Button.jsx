import React from 'react'

const Button = ({text}) => {
  return (
      <button className="mt-8 text-sm border-none bg-[#EB8C1A] px-5 md:px-7 py-3 text-white rounded-lg font-semibold hover:bg-white hover:border-[#EB8C1A] hover:border hover:text-[#EB8C1A] transition duration-[.2s]">{ text }</button>
  )
}

export default Button