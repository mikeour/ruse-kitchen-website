import { useStaticQuery, graphql } from "gatsby";

const useLogos = () => {
  const {
    instagram,
    facebook,
    yelp,
    menu,
    logo,
    expand,
    collapse,
    send,
    business
  } = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "icons/instagram-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(relativePath: { eq: "icons/facebook-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      yelp: file(relativePath: { eq: "icons/yelp-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      menu: file(relativePath: { eq: "icons/menu-logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      logo: file(relativePath: { eq: "icons/ruse_circle_logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      expand: file(relativePath: { eq: "icons/expand.png" }) {
        sharp: childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      collapse: file(relativePath: { eq: "icons/collapse.png" }) {
        sharp: childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      send: file(relativePath: { eq: "icons/send.png" }) {
        sharp: childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      business: file(relativePath: { eq: "icons/business.png" }) {
        sharp: childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return {
    instagram,
    facebook,
    yelp,
    menu,
    logo,
    expand,
    collapse,
    send,
    business
  };
};

export default useLogos;
