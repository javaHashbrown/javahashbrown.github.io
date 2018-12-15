import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

class AboutPage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={['gatsby', 'application', 'react']} />
        <h1>About Me</h1>
        <p>About</p>
        <p>Me</p>
      </Layout>
    );
  }
}

export default AboutPage;
