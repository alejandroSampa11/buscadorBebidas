import useBebidas from "../hooks/useBebidas"
import { Row } from "react-bootstrap"
import Bebida from "../components/Bebida"
import ListaFavoritos from "./ListaFavoritos"


function ListaBebidas() {
    //CONTEXT
    const { bebidas, mostrarFav } = useBebidas()

    return (
        <>
            {mostrarFav ? <ListaFavoritos />  : 
            <Row className="mt-4">
                {bebidas.map((bebida) => (
                    <Bebida
                        key={bebida.idDrink}
                        bebida={bebida}
                    />
                ))}
            </Row>}
        </>

    )
}

export default ListaBebidas