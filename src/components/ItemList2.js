import React, { useEffect, useState } from 'react'
import ItemCards from './ItemCards'

const products = [
  {id: 1, title: 'Ficciones', price: '$3449'},
  {id: 2, title: 'El aleph', price: '$3599'},
  {id: 3, title: 'Historia universal de la infamia', price: '$2999'}
]

const ItemList2 = () => {

  const [items, setItems] = useState([])

  useEffect( ()=>{
    getProducts().then(res =>{
      setItems(res)
  })
    .catch (err => { 
        console.log('err: ' + err);
  })
  }, [])

  const getProducts = () =>{
    return new Promise ( (resolve)=>{
      setTimeout( ()=> {
        resolve (products)
      }, 3000)
    })
  }

    return (
      <div>
        <h1>Componente ItemList2</h1>
        { items.map( item => <ItemCards key={item.id} {...item} /> ) }
      </div>
    )
  }
  export default ItemList2