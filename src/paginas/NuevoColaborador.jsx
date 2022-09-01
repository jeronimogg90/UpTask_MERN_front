import React from 'react'
import FormularioColaborador from '../components/FormularioColaborador'
import useProyectos from '../hooks/useProyectos'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const NuevoColaborador = () => {
    const {obtenerProyecto, proyecto, cargando, colaborador, agregarcolaborador} = useProyectos()
    const params = useParams()
    
    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    if(!proyecto?._id) return <Alerta alerta={alerta} />

  return (
    <>
        <h1 className='text-4xl font-black'>
            Añadir Colaborador al Proyecto: {proyecto.nombre}
        </h1>

        <div className='mt-10 flex justify-center'>
            <FormularioColaborador />
        </div>

        {cargando ? 'cargando ....' : colaborador?._id && (
            <div className='flex justify-center mt-10'>
                <div className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full'>
                    <h2 className='text-center mb-10 text-2xl font-bold'>Resultado: </h2>
                    
                    <div className='flex justify-between items-center'>
                        <p>{colaborador.nombre}</p>

                        <button
                            type="button"
                            onClick={() => agregarcolaborador({
                                email: colaborador.email
                            })}
                            className='bg-slate-500 px-5 py-2 rounded-lg uppercase text-white 
                                text-sm font-bold hover:bg-slate-700 transition-colors cursor-pointer'

                        >Agregar al proyecto</button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default NuevoColaborador
