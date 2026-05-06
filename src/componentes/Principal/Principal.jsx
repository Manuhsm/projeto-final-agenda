import "./Principal.css";
import { useNavigate } from "react-router-dom";

function Principal({ children }) {
  const navigate = useNavigate();

  return (
    <main className="principal__root">
      {children}
    </main>
  );
}

export default Principal;