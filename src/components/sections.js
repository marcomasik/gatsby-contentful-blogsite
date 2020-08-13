import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"

import "./section.scss"

const Sections = () => {
  	const data = useStaticQuery( 
  		graphql`
  			query MyQuery {
				  contentfulPagesMedium(title: {eq: "Frontpage"}) {
				    sectionss {
				      id
				      title
							heroImage {
								file {
									url
								}
								fluid(maxWidth: 750) {
									...GatsbyContentfulFluid
								}	
							}
							linkUrl
				    }
				  }
				}
	    `
 		)
 	
return (
	
		<div className="sections">
			{data.contentfulPagesMedium.sectionss.map(section => {
				return (
					<Link href={section.linkUrl}>
						<div className="section-background" key={section.id} style={{ backgroundImage: `url(${section.heroImage.file.url})` }}>
							{/*{section.heroImage && (
								<Img
									className="featured"
									fluid={section.heroImage.fluid}
									alt={section.title}
								/>
							)}*/}
							<h2 className="section-title">
								{section.title}
							</h2>
						</div>
					</Link>
				)
			})}
		</div>
	
	)
}

export default Sections
