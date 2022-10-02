import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const RMCard = ({name, image}) => {
  return (
    <div>
        <div>{name}</div>
        <img src={image} />
    </div>
  )
}

const RMContainer = () => {

  const [chars, setChars] = useState([])

  useEffect(() => {
    getChars()
}, [])

// FETCH RESOLVIENDO DOS PROMESAS
 const getChars = () => {
   const URL = 'https://rickandmortyapi.com/api/character?name=rick'
   fetch (URL)
    .then ( res => res.json () )
    .then ( data => {
        console.log( data.results );
        setChars( data.results )
    })
    .catch ( err => {console.log(err);})
}

return (
    <div>
        { chars.map( c => 
      <div key={c.id} className="font-mono card card-normal lg:card-side bg-base-100 shadow-x5 mt-2">
        <figure><img className='mask mask-decagon' src={c.image} alt={c.name}/></figure>
        <div className="card-body">
          <h1 className="card-title bg-error pl-5">{c.name}</h1>
          <p><b>Status:</b> {c.status}</p>
          <p><b>Species:</b> {c.species}</p>
          <p><b>Gender:</b> {c.gender}</p>
          <p><b>Location:</b> {c.location.name}</p>
        </div>
      </div>)}
    </div>
  )
}
export default RMContainer



// return (
//     <div>
//         {chars.map ( c => <li key={c.id}>{c.name}</li>)}
//     </div>
//   )
// }

// FETCH CON AXIOS Y ASYNC Y AWAIT
// const getChars = async () => { 
//     const URL = 'https://rickandmortyapi.com/api/character'
//     const response = await axios.get( URL ) 
//     setChars ( response.data.results)
// }

// FETCH CON AXIOS
// const getChars = () => { 
//   const URL = 'https://rickandmortyapi.com/api/character'
//   axios.get( URL ).then( res =>{
//     console.log(res.data.results);
//     setChars (res.data.results)
//   }) 
// }

// FETCH CON ASYNC Y AWAIT
//  const getChars = async () => {
//    const URL = 'https://rickandmortyapi.com/api/character?page=2'
//    const res = await fetch (URL)
//    const data = await res.json()
//    setChars( data.results )
// }

