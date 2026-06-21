import "./Cabecalho.css";
import Avatar from "../Avatar/Avatar";
import { useAppContext } from "../../contexto/AppContext";

function Cabecalho() {
  const { usuarioLogado } = useAppContext();

  return (
    <header className="cabecalho__root">
      {usuarioLogado && (
        <a href="/meu-perfil">
          <Avatar nome={usuarioLogado.nome} />
        </a>
      )}
    </header>
  );
}

export default Cabecalho;