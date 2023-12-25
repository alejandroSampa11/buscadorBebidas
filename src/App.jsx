//REACT-BOOTSTRAP
import { Container } from "react-bootstrap"

//COMPONENTES
import Formulario from "./components/Formulario"
import ListaBebidas from "./components/ListaBebidas"
import ModalBebida from "./components/ModalBebida"
import ListaFavoritos from "./components/ListaFavoritos"

//PROVIDERS
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>

        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListaBebidas />
          <ModalBebida />
        </Container>

      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
