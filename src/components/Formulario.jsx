import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import { useState } from "react"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

function Formulario() {
    //STATES
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')

    //CONTEXT
    const { categorias } = useCategorias()
    const { consultarBebidas, handleMostrarFavClick, mostrarFav } = useBebidas()

    //FUNCIONES
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los Campos son Obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc"
                            name="nombre"
                            id="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">Categoría</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option value="">-- Selecciona Categoría --</option>
                            {categorias.map((categoria) => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col md={3} className="mb-2">
                    <Button
                        type="submit"
                        variant="danger"
                        className="text-uppercase w-100"
                    >
                        Buscar Bebidas
                    </Button>

                </Col>
                <Col md={3}>
                    <Button
                        className="text-uppercase w-100"
                        onClick={() => {
                            handleMostrarFavClick()
                        }}
                    >{mostrarFav ?'Ocultar Favoritos':'Mostrar Favoritos' }</Button></Col>
            </Row>
        </Form>
    )
}

export default Formulario