import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './Context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const [coloumn, setColoumn] = useState('col-2')
  const container = useRef(null)
  useEffect(() => {
    setColoumn('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColoumn('col-3')
    }
    if (links.length > 3) {
      setColoumn('col-4')
    }
  }, [location, links])
  return (
    <>
      <aside
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${coloumn}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default Submenu
