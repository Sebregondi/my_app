import React, { useEffect } from 'react'

const products = [
  {id: 1, title: 'Ficciones', price: '$3449'},
  {id: 2, title: 'El aleph', price: '$3599'},
  {id: 3, title: 'Historia universal de la infamia', price: '$2999'}
]

const ItemList = () => {

  useEffect( ()=>{
    getProducts()
  }, [])

  const getProducts = () =>{
    const productsPromise = new Promise ( (resolve, reject)=>{
      const rand = Math.random()
      console.log(rand);
      if (rand > 0.5) {
          resolve ('sucess!!!')
      }
          reject ('fail')
    })

    productsPromise
      .then(res =>{
          console.log('res: ' + res);
      })
      .catch (err => { 
        console.log('err: ' + err);
      })
    console.log('Trayendo productos...');
  }

  return (
    <div>ItemList</div>
  )
}

export default ItemList