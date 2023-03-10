import {useState,useEffect} from 'react'
import Error from './Error'
function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintomas,setSintomas] = useState('')
  const [error,setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(paciente).length >0){
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      
    }
  },[paciente])



  const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return
    }
    setError(false)

    //Objeto de Paciente
    const ObjetoPaciente ={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      error,
     
    }

    if(paciente.id){
      //Editando el Registro
      ObjetoPaciente.id = paciente.id
      console.log(ObjetoPaciente)
      console.log(paciente)

      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? ObjetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
      
    }else{
      //Nuevo registro
      ObjetoPaciente.id = generarId()
      setPacientes([...pacientes,ObjetoPaciente])
    }
    
    

    //Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setError('')
   
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-5">
        A??ade Paciente y {''} 
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          {error && <Error>Todos los campos son obligatiorios</Error>}
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota</label>
          <input id="mascota" type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          placeholder="Nombre de la Mascota"/>
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario</label>
          <input  id="propietario" type="text" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e)=>setPropietario(e.target.value)}
          placeholder="Nombre del Propietario"/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email</label>
          <input  id="email" type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Email contacto del Propietario"/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta</label>
          <input  id="alta" type="date" 
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
         />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas</label>
          <textarea id="sintomas" 
          value={sintomas}
          onChange={(e)=>setSintomas(e.target.value)}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los S??ntomas"/>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer
        transition-all"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>

      </form>
    </div>
    
  )
}

export default Formulario