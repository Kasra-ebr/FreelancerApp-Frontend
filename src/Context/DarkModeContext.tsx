import { createContext, useContext, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

interface IContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkmodeContext = createContext<IContext>({
  isDarkMode: false,
  toggleDarkMode: () => {}, 
});


export function DarkModeProvider({ children }: ProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}
export function useDarkModeContext() {
  return useContext(DarkmodeContext);
}
