import React from 'react'

const NavItem = ({name,isOpen,setIsOpen }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded">
      {isOpen && <span className="text-14">{name}</span>}
    </div>
  )
}

export default NavItem
