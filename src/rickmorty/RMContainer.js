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
        { chars.map( c => <RMCard key={c.id} {...c} />)}
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

