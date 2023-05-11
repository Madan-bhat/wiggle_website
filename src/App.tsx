import { useCallback, useState } from "react";
import Login from "./pages/Login/Login";
import Dashboard from "../src/pages/Dashboard/Dashboard";

export default function App() {
  const [pressed, setPressed] = useState(false);

  const handlePressed = useCallback(() => {
    setPressed(!pressed);
  }, [pressed]);

  return !pressed ? <Login handlePressed={handlePressed} /> : <Dashboard />;
}
