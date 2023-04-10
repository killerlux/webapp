import { useState } from 'react';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
