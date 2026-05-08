import './CadastroCompromissos.css';

import CampoCustomizado from '../../componentes/CampoCustomizado/CampoCustomizado';
import Principal from '../../componentes/Principal/Principal';
import Botoes from '../../componentes/Botoes/Botoes';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CadastroCompromissos() {
    const navigate = useNavigate();

    const [compromisso, setCompromisso] = useState({
        titulo: '',
        data: '',
        hora: '',
        descricao: '',
    });

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

        if (!compromisso.titulo || !compromisso.data){
            toast.error('Preencha os campos obrigatórios!');
            return;
        }
        if(!validarDescricao(compromisso.descricao)){
            return;
        }

        if(!validarData(compromisso.data)){
            return;
        }
    };

    return (
    <Principal>
        <CampoCustomizado
            label="Título"
            type="text"
            value={compromisso.titulo}
            onChange={(e) => setCompromisso({ ...compromisso, titulo: e.target.value })}
            obrigatorio
        />
        <CampoCustomizado
            label="Data"
            type="date"
            value={compromisso.data}
            onChange={(e) => setCompromisso({ ...compromisso, data: e.target.value })}
            obrigatorio
        />
        <CampoCustomizado
            label="Hora"
            type="time"
            value={compromisso.hora}
            onChange={(e) => setCompromisso({ ...compromisso, hora: e.target.value })}
        />
        <CampoCustomizado
            label="Descrição"
            value={compromisso.descricao}
            onChange={(e) => setCompromisso({ ...compromisso, descricao: e.target.value })}
        />

        <Botoes tipo="primario" aoClicar={adicionar}>
            Adicionar
        </Botoes>

    </Principal>
       
        );
}

export default CadastroCompromissos;