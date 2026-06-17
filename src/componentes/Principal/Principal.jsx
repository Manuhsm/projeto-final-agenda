import "./Principal.css";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Principal({ children, titulo, voltarPara }) {

  const navigate = useNavigate();

  return (
    <main className="principal__root">

      <div className="principal__titulo">

        {voltarPara && (
          <IoIosArrowBack
            size={24}
            onClick={() => navigate(voltarPara)}
          />
        )}

        <h2>{titulo}</h2>

      </div>

      {children}

    </main>
  );
}

export default Principal;