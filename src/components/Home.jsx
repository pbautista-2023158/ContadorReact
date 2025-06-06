import { useEffect, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(0)
    const [buying, setBuying] = useState(false)
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState()
    const buy = ()=>{
        setBuying(true)
        alert('Gracias por tu compra.')
    }

    const getUsers = async()=>{
        //Consultar al API
        //1ra forma utilizando Fetch (Puentes de conexion entre front y back)
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        const results  = await response.json()
        console.log(results)
        //2da forma utilizando Axios
    }

    useEffect(() => {
    //Creando (logica)
    //Si la variable buying cambia ejecuta este codigo:
    if(buying){
        setCount(count + 1)
        setTotal(total + 1800)
    }else{
        console.log('No hay compras')
    }
    setBuying(false)
    /*       return () => {
        //Desmonta o se elimina
      } */
    }, [buying]) //Dependencia de actualizacion
    //Arreglo de dependencias

    useEffect(() => { //Efecto secundario

        //Consultar a la API
        getUsers()

        setTimeout(() => {
            //En la BD ya hay 500 ventas
            setCount(500)
        }, 1500);
    }, []) //Si [] esta vacio, solo se ejecuta 1 vez (Al cargar el componente)

return (
    <div>
        <span>Ventas totales: {count}</span>
        <br />
        <span>Total vendido: {total}</span>
        <br /><br />
        <button>Obtener mas productos</button>
        <br /><br />
        <h2>Contador de ventas.</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>Zapatos</td>
                <td>1500</td>
                <td><button onClick={buy}>Comprar</button></td>
            </tr>
            <tr>
                <td>Playeras</td>
                <td>800</td>
                <td><button onClick={buy}>Comprar</button></td>
            </tr> 
            <tr>
                <td>Laptop</td>
                <td>5000</td>
                <td><button onClick={buy}>Comprar</button></td>
            </tr>                                
        </tbody>
        </table>
        </div>
  )
}
