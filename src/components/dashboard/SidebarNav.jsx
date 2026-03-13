import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems } from '../../data';
import NavItem from './NavItem';

const SidebarNav = () => {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
        <motion.div 
            initial={{width:60}}
            animate={{width:isOpen?240:60}}
            transition={{duration:0.4}}
            className="bg-[#9404C3] border border-white-300 h-full text-white font-semibold p-4">
       <button onClick={() => setIsOpen((prev)=> !prev)} className='border-b border-gray-300/75 pb-4 mb-6 w-full'>
        <RxHamburgerMenu/>
       </button>
       <nav className="flex flex-col gap-4">
        {menuItems.map((item,index)=>(
          <NavItem 
          key={index} 
          name={item.name} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}/>
        ))}
       </nav>
       
  </motion.div>
</div>
  )
}

export default SidebarNav


