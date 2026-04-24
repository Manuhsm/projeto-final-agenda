function Principal({ titulo, children }) {
  const navigate = useNavigate();

  return (
    <main className="principal__root">
      <div className="principal__titulo">

        <h2>{titulo}</h2>
      </div>

      {children}
    </main>
  );
}

export default Principal;