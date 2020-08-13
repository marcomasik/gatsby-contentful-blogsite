/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const response = await graphql(`
				query {
		      allContentfulBlogPost {
		        edges {
		          node {
		            slug
		            type
		          }
		        }
		      }
		      allContentfulSection {
			    edges {
			      node {
			        title
			      }
			    }
			  }
		    }
		`)
	response.data.allContentfulBlogPost.edges.forEach(edge => {
		createPage({
			path: `/blog/${edge.node.slug}`,
			component: path.resolve(`./src/components/blogPost${edge.node.type}.js`),
			context: {
				slug: edge.node.slug,
				type: edge.node.type,
			},
		})
	})
	response.data.allContentfulSection.edges.forEach(edge => {
		createPage({
			path: `/section/${edge.node.title}`,
			component: path.resolve("./src/components/section.js"),
			context: {
				slug: edge.node.title
			},
		})
	})
}
