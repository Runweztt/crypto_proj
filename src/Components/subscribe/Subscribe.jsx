import React from 'react'
import "./Subscribe.scss"

function Subscribe() {
  return (
    <section className="subscribe">
        <div className="subscribe__container wrapper">
            <h2>Subscribe  and get  news update</h2>
            <p>Stay ahead of the crypto curve. Subscribe now to get the latest updates, 
                market trends, and exclusive offers straight to your inbox.</p>

                <form action="">
                    <input type="email" placeholder='enter email here' />
                    <a href=""className='btn'>subscribe</a>
                </form>
        </div>
    </section>

  )
}

export default Subscribe