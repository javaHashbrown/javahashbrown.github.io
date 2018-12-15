import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/PostPreview';
// eslint-disable-next-line
import { fluidImageBg } from '../utils/ImageQuery';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Img
          style={{ width: '100%', height: '80vh' }}
          fluid={data.bgImg.childImageSharp.fluid}
          alt="paul-volkmer-638816-unsplash"
        />
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '0',
            right: '0',
            width: '100%',
            margin: 'auto',
            padding: '0 2rem'
          }}
        >
          <div
            style={{
              color: 'white',
              textTransform: 'uppercase',
              textShadow: '1px 1px 0 #011',
              padding: '0 2rem'
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                fontWeight: 400,
                letterSpacing: '0.2rem'
              }}
            >
              Thoughts die but codes survive -
            </h2>
            <h4
              style={{
                textAlign: 'center',
                color: '#d45c54',
                letterSpacing: '0.1rem'
              }}
            >
              welcom to alex's midway
            </h4>
          </div>
        </div>
      </section>
      <section
        style={{
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {posts.map(({ node: post }) => {
          return <PostPreview key={post.id} node={post} />;
        })}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    bgImg: file(relativePath: { eq: "paul-volkmer-638816-unsplash.jpg" }) {
      ...fluidImageBg
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
`;
