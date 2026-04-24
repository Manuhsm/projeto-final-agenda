import "./Botoes.css";

function Botoes({ children }) {
  return (
    <div className="botoes__root">
      {children}
    </div>
  );
}

export default Botoes;