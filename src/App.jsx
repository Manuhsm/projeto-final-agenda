import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import CadastroCompromissos from "./paginas/CadastroCompromissos/CadastroCompromissos";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "/cadastro-compromissos",
    element: <CadastroCompromissos />
  }
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;