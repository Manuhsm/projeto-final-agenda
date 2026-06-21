const compromissosDoLocalStorage =
  JSON.parse(localStorage.getItem("compromissos")) || [];

export const buscarCompromissosPeloUsuario = (idUsuario) => {
  return compromissosDoLocalStorage.filter(
    (compromisso) => compromisso.idUsuario === idUsuario
  );
};

export const buscarCompromissoPeloId = (idCompromisso) => {
  return compromissosDoLocalStorage.find(
    (compromisso) => compromisso.id === idCompromisso
  );
};

export const adicionarCompromisso = (
  compromisso,
  idUsuario
) => {
  const novoCompromisso = {
    id: crypto.randomUUID(),
    idUsuario,
    ...compromisso,
  };

  compromissosDoLocalStorage.push(novoCompromisso);

  localStorage.setItem(
    "compromissos",
    JSON.stringify(compromissosDoLocalStorage)
  );
};

export const atualizarCompromisso = (
  compromissoAtualizado
) => {
  const indexDoCompromisso =
    compromissosDoLocalStorage.findIndex(
      (compromisso) =>
        compromisso.id === compromissoAtualizado.id
    );

  compromissosDoLocalStorage[indexDoCompromisso] =
    compromissoAtualizado;

  localStorage.setItem(
    "compromissos",
    JSON.stringify(compromissosDoLocalStorage)
  );
};

export const removerCompromissoPeloId = (
  idCompromisso
) => {
  const compromissosAtualizados =
    compromissosDoLocalStorage.filter(
      (compromisso) =>
        compromisso.id !== idCompromisso
    );

  localStorage.setItem(
    "compromissos",
    JSON.stringify(compromissosAtualizados)
  );
};