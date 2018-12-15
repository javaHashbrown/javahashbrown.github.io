import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
// eslint-disable-next-line
import { fluidImageBg } from '../utils/ImageQuery';

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <section>
      <Img
        style={{ width: '100%', height: '100vh' }}
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
              letterSpacing: '0.2rem',
              fontSize: '2.9rem'
            }}
          >
            Coming Soon
          </h2>
        </div>
      </div>
    </section>
  </Layout>
);

export default PortfolioPage;

export const pageQuery = graphql`
  query {
    bgImg: file(relativePath: { eq: "arun-nallamayan-1207263-unsplash.jpg" }) {
      ...fluidImageBg
    }
  }
`;
