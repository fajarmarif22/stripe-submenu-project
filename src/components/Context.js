import React, { useState, useContext } from 'react'
import sublinks from '../data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [isSubmenuOpen, setSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
