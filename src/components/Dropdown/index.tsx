

import './style.scss'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from '@/components/icons'

type Props = {
  placeholder: string,
  options: [
    {value: string, label: string}
  ]
}


export const Dropdown = ({ placeholder, options }: Props) => {
  const [showMenu, setShowMenu] = useState(false)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const getTitle = () => {
   if(!selectedValue || selectedValue === null) return placeholder;
    return selectedValue
  } 

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const handleOptionClick = (e: any) => {
    setSelectedValue(e.target.innerHTML)
  }

  useEffect(() => {
    const handler = (e : any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });


  return (
    <div className="dropdown-container" onClick={handleClick}>
      <div ref={inputRef} className="dropdown-container__input">
        { getTitle() }
        <ArrowDown/>
      </div>

      { showMenu && (
        <div className="dropdown-container__options">
          {options.map(option => (
            <div 
              key={option.value} 
              onClick={handleOptionClick}
              className="dropdown-option"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
