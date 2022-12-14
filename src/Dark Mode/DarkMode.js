import useLocalStorage from "use-local-storage";
import "../style/Dark Mode/darkmode.css";
import { Todo } from "../Todo";

export function DarkMode() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return <Todo data-theme={theme} theme={theme} switchTheme={switchTheme} />;
}
