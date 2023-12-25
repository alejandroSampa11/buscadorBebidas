import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {

    //LOCALSTORAGE
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || []

    //STATES
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState('')
    const [receta, setReceta] = useState({})
    const [cargando,setCargando] = useState(false)
    const [favoritos, setFavoritos] = useState(favoritosGuardados)
    const [mostrarFav, setMostrarFav] = useState(false)

    //EFFECT

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
      }, [favoritos]);

    useEffect(() => {
        setCargando(true)
        const consultarReceta = async () => {
            if (!bebidaId) {
                return
            }
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0])
            }
            catch (error) {
                console.log(error)
            }finally{
                setCargando(false)
            }
        }
        consultarReceta()
    }, [bebidaId])

    //FUNCIONES
    const consultarBebidas = async (datos) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
            // console.log(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }



    const handleModalClick = () => {
        setModal(!modal)
    }
    const handleMostrarFavClick = () => {
        setMostrarFav(!mostrarFav)
    }

    const handleBebidaIdClick = (id) => {
        setBebidaId(id)
    }

    const handleFavoritoClick =(bebida)=>{
        const isFavorito = favoritos.includes(bebida)
        if(isFavorito){
            setFavoritos(favoritos.filter((favorito)=>(
                favorito.idDrink !== bebida.idDrink
            )))
        }else{
            setFavoritos([...favoritos,bebida])
        }
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebidas,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando,
                handleFavoritoClick,
                favoritos,
                handleMostrarFavClick,
                mostrarFav

            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext
