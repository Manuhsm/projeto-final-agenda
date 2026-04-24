import "./PaginaInicial.css";
import Principal from "../Principal/Principal";
import Botoes from "../Botoes/Botoes";

function PaginaInicial() {
    return (
        const navigate = useNavigate();

        <Principal titulo="Agenda de Contatos">
            <Botoes>
                <button onClick={() => navigate("/contatos")}>Ver Contatos</button>
            </Botoes>
        </Principal>
    );
}

export default PaginaInicial;