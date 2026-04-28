import "./Rodape.css";

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      Copyright © {anoAtual} - Todos os direitos reservados
    </footer>
  );
}

export default Rodape;