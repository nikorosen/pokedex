import React from "react"

const appContextTemplate = {
    userName: "JohnSnow",
  }
  
  export const AppContext = React.createContext(appContextTemplate)
  
  export default function AppContextProvider({ children }) {
    return (
      <AppContext.Provider value={appContextTemplate}>
        {children}
      </AppContext.Provider>
    )
  }