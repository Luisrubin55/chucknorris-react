import {useState} from 'react'


const Jockes = ({resultados}) => {
    const [jokes, setJokes] = useState({})
    


    const consultarJokeRandom = async () => {
        
        const url = "https://api.chucknorris.io/jokes/random"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setJokes({})
        setJokes(resultado)
    }


    const handleSubmit = async () => {
        await consultarJokeRandom()
    }

const verificarDatos = () => {
    if (Object.values(resultados).length > 0) {
        const {value} = resultados
        console.log(value);
        return value
    } 
    if(Object.values(jokes).length >= 0){
        const {value} = jokes
        console.log(value);
        return value
    }
}

const value = verificarDatos()



    return (
        <div className='bg-slate-100 md:w-1/2 h-auto md:ml-16 p-4 absolute flex flex-col place-items-center'>
            <div className='flex flex-col '>
                <div className='bg-teal-600 p-6 rounded-md '>
                    <p className='text-white font-semibold'>
                        {value ? `"${value}"` : 'Presiona el boton random o selecciona una categoria' }
                    </p>
                    <img className='w-24 space-x-10' src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" />
                </div>
            </div>
            <div className='mt-8'>
                <button
                    className='bg-lime-400 py-3 px-5 rounded-lg text-fuchsia-700 font-black uppercase hover:bg-lime-500'
                    onClick={handleSubmit}
                >
                    Random
                </button>
            </div>
        </div>
    )
}

export default Jockes
