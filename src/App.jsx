import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import CadastroCompromissos from "./paginas/CadastroCompromissos/CadastroCompromissos";
import VerAgenda from "./paginas/VerAgenda/VerAgenda";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "cadastro-compromissos/:compromissosId?",
    element: <CadastroCompromissos />
  },
  {
    path: "/ver-agenda",
    element: <VerAgenda />
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