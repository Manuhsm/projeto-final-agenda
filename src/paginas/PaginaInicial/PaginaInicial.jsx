import "./PaginaInicial.css";
import Principal from "../../componentes/Principal/Principal";
import Botoes from "../../componentes/Botoes/Botoes";
import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();
  return (

    <Principal>
      <Botoes tipo="primario" aoClicar={() => navigate("/cadastro-compromissos")}>
        Cadastro de compromissos
      </Botoes>

      <Botoes tipo="secundario" aoClicar={() => navigate("/ver-agenda")}>
        Ver Agenda
      </Botoes>
    </Principal>

  );
}

export default PaginaInicial;