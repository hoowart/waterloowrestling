import React, {useState} from 'react'
import waterloowrestlinglogo from './images/waterloowrestling.webp'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true)
  
  const handleNav = () => {
    setNav(!nav)
  }

  let Links =[
    {name:"About", link:"/about"},
    {name:"Pricing", link:"/pricing"},
    {name:"Register", link:"/register"},
    {name:"Gallery", link:"/gallery"},
    {name:"Contact Us", link:"/contact"}
  ];
  return (
    <>
        
        <div className="max-w-[1240px] mx-auto h-28 flex top-0 right-0 left-0 p-1 justify-between items-center">
          
          <a href="/about">
            <img className=" h-20 m-4 hover:cursor-pointer flex" src={waterloowrestlinglogo}></img>
          </a>
          <ul className="hidden md:flex list-none gap-10 text-l p-6">
            {
              Links.map((Link)=>(
                <li>
                  <a href={Link.link}>
                    <h1 className="hover:text-yellow-400">
                      {Link.name}
                    </h1>
                  </a>
                </li>
              ))
            }
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          </div>
          
          <div className={!nav ? "fixed z-5 left-0 top-0 right-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500" : "fixed left-[-100%]"}>
            <a href="/about">
              <img className="h-20 m-4 hover:cursor-pointer flex" src={waterloowrestlinglogo}></img>
            </a>
            <ul className="p-4 bg-black">
              {
                Links.map((Link)=>(
                  <li>
                    <a href={Link.link}>
                      <h1 className="hover:text-yellow-400 p-4 border-b border-gray-600">
                        {Link.name}
                      </h1>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 h-[10px]"></div>
    </>
  )
}

export default Navbar