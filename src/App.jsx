import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import ValidarAutenticacao from "./componentes/ValidarAutenticacao/ValidarAutenticacao";

import AppContextProvider from "./contexto/AppContext";

import CadastroCompromissos from "./paginas/CadastroCompromissos/CadastroCompromissos";
import VerAgenda from "./paginas/VerAgenda/VerAgenda";
import Login from "./paginas/Login/Login";
import NovoUsuario from "./paginas/NovoUsuario/NovoUsuario";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PerfilUsuario from "./paginas/PerfilUsuario/PerfilUsuario";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "novo-usuario",
    element: <NovoUsuario />,
  },
  {
    path: "",
    element: <ValidarAutenticacao />,
    children: [
      // Rotas privadas ao app, ou seja, só podem ser acessadas por usuários autenticados
      {
        path: "",
        element: <PaginaInicial />,
      },
      {
        path: "meu-perfil",
        element: <PerfilUsuario />,
      },
      {
        path: "cadastro-compromissos/:compromissoId?",
        element: <CadastroCompromissos />,
      },
      {
        path: "/ver-agenda",
        element: <VerAgenda />,
      }
    ],
  },
]);

function App() {
  return (
    <>
    <AppContextProvider>
        <Cabecalho />
        <RouterProvider router={roteador} />
        <Rodape />
        <ToastContainer />
      </AppContextProvider>
    </>
  );
}

export default App;