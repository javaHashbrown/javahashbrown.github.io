import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostPreviewByYear } from '../components/PostPreview'
import Img from 'gatsby-image'
// eslint-disable-next-line
import { fluidImageBg } from '../utils/ImageQuery'

const BlogPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { edges: posts } = data.allMarkdownRemark
  const postsByYear = categoryPostsByYear(posts)
  const yearDesc = Object.keys(postsByYear).sort((a, b) => b - a)
  // console.log(yearDesc);
  return (
    <Layout>
      <SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
      <section>
        <Img
          style={{
            width: '100%',
            height: '80vh',
          }}
          fluid={data.bgImg.childImageSharp.fluid}
          alt="osman-rana-263708-unsplash"
        />

        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '0',
            right: '0',
            width: '100%',
            margin: 'auto',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              textShadow: '1px 1px 0 #011',
              padding: '0 2rem',
            }}
          >
            <h4
              style={{
                textAlign: 'center',
                color: 'white',
                // color: '#d45c54',
                letterSpacing: '0.1rem',
                lineHeight: '2',
                background: 'rgba(0,0,0,0.8)',
              }}
            >
              {siteMetadata.sloganBlog}
            </h4>
          </div>
        </div>
      </section>
      <section
        style={{
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {yearDesc.map(year => {
          let postsInYear = postsByYear[year]
          return (
            <PostPreviewByYear
              key={year}
              year={year}
              postsInYear={postsInYear}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        sloganBlog
      }
    }
    bgImg: file(relativePath: { eq: "osman-rana-263708-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

function categoryPostsByYear(posts, order = 'DESC') {
  var postsByYear = {}
  const reg = /(\d)+/g
  posts.forEach(post => {
    const { date } = post.node.frontmatter
    const dates = date.match(reg)
    const year = dates[1]

    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })
  // console.log(postsByYear['2017'], postsByYear['2018']);
  return postsByYear
}
