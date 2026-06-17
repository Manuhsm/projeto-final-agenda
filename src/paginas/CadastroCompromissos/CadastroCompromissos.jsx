import './CadastroCompromissos.css';

import CampoCustomizado from '../../componentes/CampoCustomizado/CampoCustomizado';
import Principal from '../../componentes/Principal/Principal';
import Botoes from '../../componentes/Botoes/Botoes';

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { toast } from 'react-toastify';


function CadastroCompromissos() {

    const navigate = useNavigate();
    const params = useParams();

    const [compromisso, setCompromisso] = useState({
        titulo: '',
        data: '',
        hora: '',
        descricao: '',
    });

    useEffect(() => {

      if (params.compromissosId) {
      const compromissosDoLocalStorage = JSON.parse(localStorage.getItem("compromissos")) || [];
      const compromissoEncontrado = compromissosDoLocalStorage.find(
        (compromisso) => compromisso.id === params.compromissosId
      );

      if (compromissoEncontrado) {
        setCompromisso(compromissoEncontrado);
      }
    }
  }, [params]);

    const validarDescricao = (descricao) => {

        if (descricao.length > 200) {
            toast.error('A descrição deve conter no máximo 200 caracteres!');
            return false;
        }

        return true;
    };


    const validarData = (data) => {

        const dataAtual = new Date();
        const dataCompromisso = new Date(data);

        if (dataCompromisso < dataAtual) {
            toast.error('A data do compromisso não pode ser anterior à data atual!');
            return false;
        }

        return true;
    };


    const adicionar = () => {

        if (
            !compromisso.titulo?.trim() ||
            !compromisso.data?.trim()
        ) {
            toast.error("Título e data são obrigatórios!");
            return;
        }

        if (!validarDescricao(compromisso.descricao)) {
            return;
        }

        if (!validarData(compromisso.data)) {
            return;
        }


        const compromissosDoLocalStorage =
            JSON.parse(localStorage.getItem("compromissos")) || [];

        if (compromisso.id) {

            const indexDoCompromisso = compromissosDoLocalStorage.findIndex(
                (itemCompromisso) => itemCompromisso.id === compromisso.id
            );

            compromissosDoLocalStorage[indexDoCompromisso] = compromisso;

        } else {

            const novoCompromisso = {
                id: crypto.randomUUID(),
                ...compromisso
            };

            compromissosDoLocalStorage.push(novoCompromisso);
        }

        localStorage.setItem(
            "compromissos",
            JSON.stringify(compromissosDoLocalStorage)
        );

        toast.success("Compromisso cadastrado com sucesso!");

        navigate("/ver-agenda");
    };

     const titulo = compromisso.id ? "Editar Compromisso" : "Novo Compromisso";

    return (
        <Principal titulo={titulo} voltarPara="/ver-agenda">

            <CampoCustomizado
                label="Título"
                type="text"
                value={compromisso.titulo}
                onChange={(e) =>
                    setCompromisso({
                        ...compromisso,
                        titulo: e.target.value
                    })
                }
                obrigatorio
            />

            <CampoCustomizado
                label="Data"
                type="date"
                value={compromisso.data}
                onChange={(e) =>
                    setCompromisso({
                        ...compromisso,
                        data: e.target.value
                    })
                }
                obrigatorio
            />

            <CampoCustomizado
                label="Hora"
                type="time"
                value={compromisso.hora}
                onChange={(e) =>
                    setCompromisso({
                        ...compromisso,
                        hora: e.target.value
                    })
                }
            />

            <CampoCustomizado
                label="Descrição"
                value={compromisso.descricao}
                onChange={(e) =>
                    setCompromisso({
                        ...compromisso,
                        descricao: e.target.value
                    })
                }
            />

            <Botoes tipo="primario" aoClicar={adicionar}>
                Adicionar
            </Botoes>

        </Principal>
    );
}

export default CadastroCompromissos;