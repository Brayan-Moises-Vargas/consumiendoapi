/* import React from 'react'

const Buscador = () => {
  const [data, setDatafilter] = useState();
  
  const inpuHandle = (e) =>{
    const buscarpersonaje = e.targer.value.toLowerCase()

    const resultfilter = data.filter(
      (personaje) =>
      personaje.name.toLowerCase().includes(buscarpersonaje) 
    )
setDatafilter(resultfilter )
console.log(resultfilter);
  }




  return (
    <div className='buscador col-12 col-md-6'>
      <input 
      type="text"
      name='filtro'
      id='filtro'
      placeholder='busca un personaje'
      className='form-control mb-3' 
      onChange={inpuHandle}/>
    </div>
  )
}

export default Buscador */
