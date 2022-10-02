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
   const URL = 'https://rickandmortyapi.com/api/character'
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
      <div key={c.id} className="card w-96 bg-base-100 shadow-xl bordered">
        <figure><img src={c.image} alt={c.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{c.name}</h2>
          <li><b>Gender:</b> {c.gender}</li>
          <li><b>Species:</b> {c.species}</li>
          <li><b>Status:</b> {c.status}</li>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
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

