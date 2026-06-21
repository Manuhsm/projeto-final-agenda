import "./PerfilUsuario.css";

import { toast } from "react-toastify";
import Botoes from "../../componentes/Botoes/Botoes";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { useAppContext } from "../../contexto/AppContext";
import { salvarUsuario } from "../../servicos/usuarios";

function PerfilUsuario() {
  const { usuarioLogado, setUsuarioLogado } = useAppContext();

  const salvar = () => {
    salvarUsuario(usuarioLogado);
    toast.success("Perfil atualizado com sucesso!");
  };

  const sair = () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "/";
  };

  return (
    <Principal titulo="Meu Perfil" voltarPara="/">
      {usuarioLogado && (
        <>
    
          <CampoCustomizado label="Email" value={usuarioLogado.email} disabled />
          <CampoCustomizado
            label="Nome"
            value={usuarioLogado.nome}
            onChange={(e) => setUsuarioLogado({ ...usuarioLogado, nome: e.target.value })}
          />

          <Botoes tipo="primario" aoClicar={salvar}>
            Salvar
          </Botoes>
          <Botoes tipo="secundario" aoClicar={sair}>
            Sair
          </Botoes>
        </>
      )}
    </Principal>
  );
}

export default PerfilUsuario;
