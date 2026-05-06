import "./Rodape.css";

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      Anote todos seus compromissos aqui!
    </footer>
  );
}

export default Rodape;