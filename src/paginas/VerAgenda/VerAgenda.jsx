import "./VerAgenda.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Principal from "../../componentes/Principal/Principal";

import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";

import { useAppContext } from "../../contexto/AppContext";
import { buscarCompromissosPeloUsuario } from "../../servicos/clientes";

function VerAgenda() {
  const navigate = useNavigate();

  const { usuarioLogado } = useAppContext();

  const [compromissos, setCompromissos] = useState(
    usuarioLogado
      ? buscarCompromissosPeloUsuario(usuarioLogado.id)
      : []
  );

  const removerCompromisso = (compromissoParaRemover) => {
    if (
      confirm(
        `Tem certeza que deseja remover o compromisso ${compromissoParaRemover.titulo}?`
      )
    ) {
      const compromissosAtualizados = compromissos.filter(
        (compromisso) =>
          compromisso.id !== compromissoParaRemover.id
      );

      setCompromissos(compromissosAtualizados);

      const todosCompromissos =
        JSON.parse(localStorage.getItem("compromissos")) || [];

      const listaAtualizada = todosCompromissos.filter(
        (compromisso) =>
          compromisso.id !== compromissoParaRemover.id
      );

      localStorage.setItem(
        "compromissos",
        JSON.stringify(listaAtualizada)
      );
    }
  };

  return (
    <Principal titulo="Ver Agenda" voltarPara="/">
      {compromissos.map((compromisso) => (
        <div
          key={compromisso.id}
          className="ver-agenda"
        >
          <div className="lista-compromissos__informacoes">
            <h3>{compromisso.titulo}</h3>

            <p>Data: {compromisso.data}</p>

            <p>Hora: {compromisso.hora}</p>

            <p>Descrição: {compromisso.descricao}</p>
          </div>

          <div>
            <MdEdit
              size={24}
              onClick={() =>
                navigate(
                  `/cadastro-compromissos/${compromisso.id}`
                )
              }
            />

            <MdDelete
              size={24}
              color="red"
              onClick={() =>
                removerCompromisso(compromisso)
              }
            />
          </div>
        </div>
      ))}

      {compromissos.length === 0 && (
        <p className="lista-compromissos__mensagem-vazia">
          Nenhum compromisso encontrado.
        </p>
      )}

      <MdAddCircle
        className="lista-compromissos__botao-adicionar"
        size={64}
        color="rgb(148, 40, 99)"
        onClick={() =>
          navigate("/cadastro-compromissos")
        }
      />
    </Principal>
  );
}

export default VerAgenda;