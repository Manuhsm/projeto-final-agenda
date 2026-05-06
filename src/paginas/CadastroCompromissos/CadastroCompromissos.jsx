import './CadastroCompromissos.css';

import CampoCustomizado from '../../componentes/CampoCustomizado/CampoCustomizado';
import Principal from '../../componentes/Principal/Principal';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CadastroCompromissos() {
    const navigate = useNavigate();

    const [compromisso, setCompromisso] = useState({
        titulo: '',
        data: '',
        hora: '',
        descricao: ''
    });


    return <Principal>
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
            obrigatorio={true}
            type="time"
            value={compromisso.hora}
            onChange={(e) => setCompromisso({ ...compromisso, hora: e.target.value })}
        />
        <CampoCustomizado
            label="Descrição"
            value={compromisso.descricao}
            onChange={(e) => setCompromisso({ ...compromisso, descricao: e.target.value })}
        />

    </Principal>
}

export default CadastroCompromissos;