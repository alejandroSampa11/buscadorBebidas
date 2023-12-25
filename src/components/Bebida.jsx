import { Card, Col, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function Bebida({ bebida }) {

    const { handleModalClick, handleBebidaIdClick, handleFavoritoClick,favoritos } = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    <Button
                        variant="warning"
                        className="w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleModalClick(),
                                handleBebidaIdClick(bebida.idDrink)
                        }}
                    >
                        Ver Receta
                    </Button>
                    <Button
                        className="w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleFavoritoClick(bebida)
                        }}
                    >
                        {favoritos.includes(bebida)
                            ? 'Eliminar de Favoritos'
                            : 'Agregar a Favoritos'}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida