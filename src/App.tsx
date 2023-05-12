import { useCallback, useState } from "react";
import Register from "./pages/Register/Register";
import Dashboard from "../src/pages/Dashboard/Dashboard";

export default function App() {
  const [pressed, setPressed] = useState(false);

  const handlePressed = useCallback(() => {
    setPressed(!pressed);
  }, [pressed]);

  return !pressed ? <Register handlePressed={handlePressed} /> : <Dashboard />;
}
