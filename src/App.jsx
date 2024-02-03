import { useState, useEffect } from 'react'
import Header from './components/Header'
import Jockes from './components/Jockes'


function App() {

  const [datos, setDatos] = useState({})
  const [resultados, setResultado] = useState({})


  const recuperarDatosCategoria = (datos) => {
    setDatos(datos)
  }

  useEffect(() => {
    if (datos.length > 0) {
      setResultado({})
      const consularPorOpcion = async() => {
        const url = `https://api.chucknorris.io/jokes/random?category=${datos}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado)
      }
      consularPorOpcion()
    }
    return
  }, [datos])



  return (
    <>
      <Header 
        recuperarDatosCategoria={recuperarDatosCategoria} 
      />
      <div className='bg-amber-800 h-screen flex flex-col justify-center place-items-center '>
        <Jockes resultados={resultados} />
      </div>
    </>
  )
}

export default App
