import { createContext, useState } from "react";
type Props = {
  children: JSX.Element;
};
type Theme = {
  isDark: boolean;
  switchTheme: () => void;
};

export const ThemeContext = createContext<Theme>({
  isDark: false,
  switchTheme: () => {},
});

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark: isDark, switchTheme: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
