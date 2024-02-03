import { useState, useEffect } from 'react'

const Header = ({ recuperarDatosCategoria, recuperarDatosCadena}) => {
    const [opcion, setOpcion] = useState('')
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const consultaCategorias = async () => {
            const url = "https://api.chucknorris.io/jokes/categories"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCategorias(resultado)
        }
        consultaCategorias()
    }, [])


    const handleSubmitCategoria = e => {
        e.preventDefault()
        recuperarDatosCategoria(opcion)
    }


    return (
        <>
            <div className='flex flex-col md:flex-row bg-orange-500 p-3'>
                <div className='md:w-1/2'>
                    <img className='w-24' src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" />
                </div>
                <div className=' md:w-2/2 flex gap-3 self-center md:ml-72 '>
                    <p className='text-xl text-white font-bold'>Categorias</p>
                    <form onSubmit={handleSubmitCategoria} className=' flex gap-3'>
                        <select
                            className='bg-slate-200 rounded-xl p-1'
                            onChange={e => setOpcion(e.target.value)}
                        >
                            <option value="" className=''>--Selecciona--</option>
                            {categorias.map(categoria => (
                                <option
                                    value={categoria}
                                    key={categoria}
                                >
                                    {categoria}
                                </option>
                            ))}
                        </select>
                        <input
                            type='submit'
                            value="Buscar"
                            className='bg-lime-600 px-1 py-1.5 rounded-md text-white font-bold uppercase hover:bg-lime-700'
                        />
                    </form>

                </div>
            </div>
        </>
    )
}

export default Header
