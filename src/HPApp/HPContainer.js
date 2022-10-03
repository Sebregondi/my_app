import React, { useEffect, useState } from 'react'

const HPContainer = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
      getBooks()
    }, [])
    
    const getBooks = () => { 
    const URL = 'https://legacy--api.herokuapp.com/api/v1/books'
    fetch (URL)
        .then (res => res.json())
        .then (data => {
            console.log(data);
            setBooks(data)
        }) 
    }


  return (
    <div>
        { books.map( b => 
      <div key={b.id} className="font-mono card card-normal lg:card-side bg-base-100 shadow-x5 mt-2">
        <figure><img className='w-29 rounded-xl' src={b.image_url} alt={b.title}/></figure>
        <div className="card-body">
          <h1 className="card-title bg-error pl-5">{b.title}</h1>
          <p><b>Release date:</b> {b.release_date}</p>

        <div className="card-actions justify-end">
            <button className="btn btn-primary bg-error">Buy now</button>
        </div>
        </div>
      </div>)}
    </div>
  )
}

export default HPContainer