import { graphql } from 'gatsby';

export const fluidImageBg = graphql`
  fragment fluidImageBg on File {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
