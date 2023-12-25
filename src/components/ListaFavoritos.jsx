import useBebidas from "../hooks/useBebidas"
import { Row } from "react-bootstrap"
import Bebida from "./Bebida"

function ListaFavoritos() {

  //CONTEXT
  const { favoritos } = useBebidas()

  return (
    <>
      <h2 className="mt-3">Bebidas Favoritas</h2>
      <Row className="mt-3">
        {favoritos.map((favorito) => (
          <Bebida
            key={favorito.idDrink}
            bebida={favorito}
          />
        ))}
      </Row>
    </>
  )
}

export default ListaFavoritos