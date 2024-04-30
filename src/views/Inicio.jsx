import Producto from '../components/Producto'
import { productos } from '../data/productos'

export default function Inicio() {
  return (
    <>
      <h1 className='text-4xl font-bold'>Inicio</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuacion.
      </p>

      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto 
            key={producto.imagen} 
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
