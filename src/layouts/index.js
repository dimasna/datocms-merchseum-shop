import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Merchseum Shop" />
    <div className="Container">
      <div className="Header">
        <img src="https://res.cloudinary.com/dzrwauiut/image/upload/v1599592829/merchseum_nysmw9.png" width="100"/>
          <div className="Header__body">
            
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                🛍 MY CART 🛍
              </div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price"></span>
              </div>
            </div>
          
        </div>
      </div>
      <br/>
      <div className="Wrap" >
        {children}
      </div>
      
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

