import React from 'react'
import { useEffect } from 'react'

const SWCointainer = () => {

    useEffect(() => {
      getPeople ()
    }, [])
    
    const getPeople = () => {
        const URL = 'http https://swapi.dev/api/people/'
        fetch (URL)
            .then (response => {
                return response.json()
            })
            .then (data => {
                console.log(data);
            })
    }

  return (
    <div>SW Cointainer</div>
  )
}

export default SWCointainer