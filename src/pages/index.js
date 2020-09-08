import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'
import withLocation from "../layouts/withLocation"

const CustomQueryStringComponent = ({ search }) => {
  const { usercatalogid } = search
  //const usercatalogid = 1;
  return (
    <StaticQuery
      query={graphql`
        query CatalogueQuery {
          products: allDatoCmsProduct {
            edges {
              node {
                cataloguserid
                id
                name
                price
                image {
                  url
                  sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
            }
          }
          site {
            siteMetadata {
              siteName
            }
          }
        }
      `}
  render={data => {
    console.log("usercatalogid :" +usercatalogid);
    const item = usercatalogid !== undefined ? data.products.edges.find(
    edge => edge.node.id === `DatoCmsProduct-${usercatalogid}-en`
  ) : undefined;
  
  console.log("item : "+JSON.stringify(item))
  if (item == undefined) {
    return <Layout site={data.site}>
      <div className="Catalogue">
        {
          data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div> <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">
                      {product.price}€
                    </div>
                  </div>
                  <span className="Product__buy">Buy now</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  }
  return <Layout site={data.site}>
    <div className="Catalogue">
      {
        
          <div className="Catalogue__item" key={item.node.id}>
            <div
              className="Product snipcart-add-item"
              data-item-id={item.node.id}
              data-item-price={item.node.price}
              data-item-image={item.node.image.url}
              data-item-name={item.node.name}
              data-item-url={`/`}
            >
              <div className="Product__image">
                <Img sizes={item.node.image.sizes} />
              </div> <div className="Product__details">
                <div className="Product__name">
                  {item.node.name}
                  <div className="Product__price">
                    {item.node.price}€
                  </div>
                </div>
                <span className="Product__buy">Buy now</span>
              </div>
            </div>
          </div>
        
      }
    </div>
  </Layout>
  }}
     />
  )
}

CustomQueryStringComponent.propTypes = {
  search: PropTypes.object,
}

export default withLocation(CustomQueryStringComponent)


