import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import portfolioStyles from './portfolio.module.scss';
import Head from '../components/Head';


const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulDigital {
        edges {
          node {
            title
            slug
            image {
              file {
                url
              }
              description
            }
          }
        }
      }
    }
    `)
    console.log(data)

    return(
            <Layout>
            <Head title = "digital" />
            <h2>Digital</h2>
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulDigital.edges.map((edge) => {
                  /*let imagePath; 
                  for (const item of edge.node.body.json.content) {
                   if(item.nodeType === "embedded-asset-block") {
                    imagePath = item
                   }

                  }
                  console.log(imagePath.data.target)
                 const url = imagePath.data.target.fields.file['en-US'].url
                 const alt = imagePath.data.target.fields.title['en-US']*/
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/digital/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={portfolioStyles.img}/>

                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default PortfolioPage;