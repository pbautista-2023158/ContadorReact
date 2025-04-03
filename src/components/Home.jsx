import { useEffect, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(0)
    const [buying, setBuying] = useState(false)
    const [total, setTotal] = useState(0)
    const buy = ()=>{
        setBuying(true)
        alert('Gracias por tu compra.')
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
        //alert ('Cargando datos desde la BD')
        setTimeout(() => {
            //En la BD ya hay 500 ventas
            setCount(500)
        }, 5000);
    }, []) //Si [] esta vacio, solo se ejecuta 1 vez (Al cargar el componente)

return (
    <div>
        <span>Ventas totales: {count}</span>
        <span>Total vendido: {total}</span>
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
