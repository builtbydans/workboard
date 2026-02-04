import { useState, useMemo } from "react";

const ComplexDashboard = () => {
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const heavyList = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return ["Result 1", "Result 2", "Result 3"].filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      <ul>
        {heavyList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplexDashboard;
