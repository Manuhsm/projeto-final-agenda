export const buscarUsuarioLogado = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const idUsuarioLogado = localStorage.getItem("usuarioLogado");

  if (!idUsuarioLogado) {
    return null;
  }

  return (
    usuarios.find((u) => String(u.id) === String(idUsuarioLogado)) || null
  );
};

export const salvarUsuario = (usuarioAtualizado) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const indexDoUsuario = usuarios.findIndex(
    (u) => u.id === usuarioAtualizado.id
  );

  if (indexDoUsuario !== -1) {
    usuarios[indexDoUsuario] = usuarioAtualizado;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};