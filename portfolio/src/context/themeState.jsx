import { useState } from "react";
import ThemeContext from "./themeContext";

export const ThemeProvider  = ({children})=>{
  const [theme,setTheme] = useState(true);
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

} 