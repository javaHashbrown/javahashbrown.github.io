import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import postStyles from './Post.module.css'
// eslint-disable-next-line
import { fluidImageBg } from '../../utils/ImageQuery'
import 'katex/dist/katex.min.css'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  // console.log(previous, next);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article className={postStyles.article}>
        <Img
          backgroundColor={!!post.frontmatter.image}
          fluid={post.frontmatter.image.childImageSharp.fluid}
          className={postStyles.img}
          alt={
            post.frontmatter.image
              ? post.frontmatter.image.name
              : 'background img'
          }
        />
        <section className={postStyles.grid}>
          <header className={postStyles.header}>
            <h1 className={postStyles.title}>{post.frontmatter.title}</h1>
            <p className={postStyles.date}>{post.frontmatter.date}</p>
          </header>
          <hr />
        </section>

        <section className={postStyles.grid}>
          <div
            className={postStyles.passage}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <nav className={postStyles.nav}>
            <div className={postStyles.left}>
              {previous && (
                <Link className={postStyles.button} to={previous.fields.slug}>
                  <span className={(postStyles.arrow, postStyles.prev)}>
                    {previous.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
            <div className={postStyles.right}>
              {next && (
                <Link className={postStyles.button} to={next.fields.slug}>
                  <span className={(postStyles.arrow, postStyles.next)}>
                    {next.frontmatter.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </section>
      </article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          ...fluidImageBg
        }
      }
    }
  }
`
