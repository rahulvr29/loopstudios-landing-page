import React from 'react'
import data from '../data-mobile'

const Creations = () => {
  const[cards, setCards] = React.useState(data)


  return (
    <section className='creation-mobile'>
      <h2>Our creation</h2>
    <section>
      {
        cards.map((card) =>{
          const {id, image, title } = card
          return (
            <article key={id}>
              <div>
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
            </article>
          )
        })
      }
    </section>
    <div className='btn-container'>
      <button className="btn">See All</button>
    </div>
    </section>
  )
}

export default Creations