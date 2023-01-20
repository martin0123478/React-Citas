

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''}
            <span className='font-normal normal-case'>Hook</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {''}
            <span className='font-normal normal-case'>Martín</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''}
            <span className='font-normal normal-case'>martin@gmail.com</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: {''}
            <span className='font-normal normal-case'>10/10/22</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {''}
            <span className='font-normal normal-case'>Dierme</span>
          </p>
        </div>
  )
}

export default Paciente
