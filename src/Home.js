import React from 'react'
import Product from './Product.js'
import Hero from './Hero.js'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <div className='home__row'>
        <Product
          id='12312341'
          title='ESR Wheels CS8 Apex Blue'
          price={284.75}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/esr-wheels-new-cs8-apex-blue-wheels-esr-wheels.jpg?v=1614505523'
          rating={4}
        />
        <Product
          id='49538094'
          title='Brembo Gran Turismo Drilled Brake Kit 4 Piston 2-Piece Red Rear Subaru STI 2008-2014'
          price={3547.21}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/brembo-gran-turismo-drilled-brake-kit-4-piston-2-piece-red-rear-subaru-sti-2008-2014-big-brake-kits-brembo-bre-2p18020a2.jpg?v=1614535654'
          rating={4}
        />
      </div>
      <div className='home__row'>
        <Product
          id='49538050'
          title='Seibon 94-01 Acura Integra Carbon Fiber Fenders (Pair) (FF9401ACIN) '
          price={1020.02}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/seibon-94-01-acura-integra-carbon-fiber-fenders-pair-ff9401acin-fenders-seibon-seiff9401acin.jpg?v=1614519843'
          rating={4}
        />
        <Product
          id='23445930'
          title='APR GTC-200 Integra SPEC - Acura Integra 1994-2001'
          price={994.56}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/apr-gtc-200-integra-spec-acura-integra-1994-2001-spoilers-and-wings-apr-as-105921.jpg?v=1614510459'
          rating={3}
        />
        <Product
          id='3254354345'
          title='PRL Motrosports 17-21 Honda Civic Type-R FK8 Front Pipe Upgrade '
          price={399.99}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/2017-2021-honda-civic-type-r-fk8-front-pipe-upgrade-214352_600x_040a1f54-76f0-4f50-afdc-34447c89b912.jpg?v=1675425687'
          rating={2}
        />
      </div>
      <div className='home__row'>
        <Product
          id='90829332'
          title='ST Suspension XTA Plus 3 Coilover Kit Honda Civic Type R 2017+'
          price={3634.98}
          image='https://cdn.shopify.com/s/files/1/0075/8703/7237/products/4bad03a4d6bb617fa667ad51d935b115.jpg?v=1641652838'
          rating={5}
        />
      </div>
    </>
  )
}

export default Home
